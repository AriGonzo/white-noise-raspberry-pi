//Server Dependencies-----------------------------------------------------
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var PORT = process.env.PORT || 8080;
//-----------------------------------------------------------------

//Player Dependencies-----------------------------------------------------
var player = require('play-sound')(opts = {})
var loudness = require('loudness');
//-----------------------------------------------------------------

//Middleware-------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('public'));
//-----------------------------------------------------------------

app.get('/', function(){
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Turning on Server------------------------------------------------
server.listen(PORT, function(){
	console.log("listening on", PORT)
});
//-----------------------------------------------------------------

//Adding Round To logic for volume---------------------------------
Number.prototype.roundTo = function(num) {
    var resto = this%num;
    if (resto <= (num/2)) { 
        return this-resto;
    } else {
        return this+num-resto;
    }
}
//-----------------------------------------------------------------

function playStop(playSound, selectedTrack){
	if (playSound){
		status = true;
		audio = player.play(selectedTrack, function(err){
			if (err && !err.killed) {
				throw err
			}
			if (globalSelectedTrack.url == selectedTrack) {
				playStop(status, selectedTrack)
			}
		});
	} else {
		status = false;
		audio.kill();
	}
	sendStatus();
}

function adjustAudio(){
	loudness.setVolume(volume, function(){
		console.log('volume set to', volume);
		sendStatus();
	});
}

function sendStatus() {
	io.emit('send current status', {
				volume: volume,
				playing: status,
				track: globalSelectedTrack,
			})
}

var audio;
var status = status || false;
var volume;
var availableTracks = [{
	title: "White Noise",
	url: './whiteNoise.mp3',
	id: 0,
	selected: true,
	img: 'images/static.gif'
},{
	title: "Rain",
	url: './rain.mp3',
	id: 1,
	selected: false,
	img: 'images/rain.gif'
},{
	title: "Dots Song",
	url: './dotsSong.mp3',
	id: 2,
	selected: false,
	img: 'images/dots.gif'
}]
var globalSelectedTrack = availableTracks[0];

io.on('connection', function (socket) {
	socket.on('adjust volume', function(value){
		volume = value.roundTo(5),
		adjustAudio()
	});
	socket.on('play/stop', function(playSound){
		playStop(playSound, globalSelectedTrack.url)
	});

	loudness.getVolume(function (err, vol) {
		loudness.getMuted(function (err, mute) {
			volume = vol.roundTo(5);
			sendStatus()
		});
	});
	socket.on('new track', function(songId){
		globalSelectedTrack = availableTracks[songId]
		if (audio) {
			audio.kill();
		}
		if (status) {
			playStop(status, availableTracks[songId].url)
		}
		sendStatus();
	});
});
