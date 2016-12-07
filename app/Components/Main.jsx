import React from 'react'


import Slider from './Volume.jsx'
import TrackSelectBar from './TrackSelectBar.jsx'
import PlayButton from './PlayButton.jsx'



export default class Main extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.volumeChange = this.volumeChange.bind(this)
		this.trackChange = this.trackChange.bind(this)
		this.togglePlay = this.togglePlay.bind(this)
		this.adjustCurrentState = this.adjustCurrentState.bind(this)
		this.state = {
			track: {}
		}
		this.socket = io.connect('http://192.168.1.65:8080/');
	}

	componentDidMount(){
		var that = this;
		this.socket.on('send current status', this.adjustCurrentState);
	}

	adjustCurrentState(state){
		this.setState(state)
	}

	volumeChange(event, value){
		console.log(value)
		if (value == this.state.volume) { return false }
		this.setState({
			volume: value
		});
		this.socket.emit('adjust volume', value);
	}

	trackChange(track){
		if (track.id == this.state.track.id) { return false }
		this.setState({
			track: track
		});
		this.socket.emit('new track', track.id);
	}

	togglePlay(newValue){
		if (newValue == this.state.playing) { return false }
		this.setState({
			playing: newValue
		});
		this.socket.emit('play/stop', newValue);
	}

	render(){
	    return (
	    	<div>
		        <div className="row" id="controlRow">
		    		<TrackSelectBar 
		    			className="col-md-12 col-sm-12 col-xs-12"
		    			trackChange={this.trackChange}
		    			track={this.state.track}
	    			/>
		        	<PlayButton
		        		playing={this.state.playing}
		        		togglePlay={this.togglePlay}
	        		/>
					<Slider
		        		volume={this.state.volume}
		        		volumeChange={this.volumeChange}
		        		className="col-md-12 col-sm-12 col-xs-12"
		        	/>
		        </div>
	        </div>
	    );
	}
}
