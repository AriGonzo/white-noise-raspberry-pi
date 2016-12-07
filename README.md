#NodeJS/React White Noise Machine
###Built for Raspberry Pi

###Technologies Used

* [Node.js](https://nodejs.org)
* [Express.js](http://expressjs.com/)
* [Socket.io](http://socket.io/)
* [Webpack](https://webpack.github.io/)
* [ReactJS](https://facebook.github.io/react/)
* [Material-UI](http://www.material-ui.com/#/)
* [Bootstrap](getbootstrap.com)

###Why?

Built this white noise machine since my daughter needs some kind of noise to sleep and we didn't want to give up one of our devices to play it. We needed a mobile interface to control it and I had a Raspberry Pi with busted graphics sitting around so I put this together. 

###How Do I use it?

You can run this locally by running the server.js file and going to your local network IP + port 8080 for the device running the server file on your phone (example: run server.js on computer and go to http://192.168.1.70:8080 on your phone). You can control the audio on the server device using the web interface. Make note below about the audio files.

###Current Tracks

* [Static White Noise](https://www.youtube.com/watch?v=t0I4mTEdAf8)
* [Rain White Noise](https://www.youtube.com/watch?v=O0wRYkuzQXo)
* [Baby Calming Dots](https://www.youtube.com/watch?v=wLFjYVN3dIo)

That last one has worked wonders for me.

###Web Interface
![demo gif](./public/images/demo.gif)

###Future Plans

* Refactor the server side files and seperate concerns.
* Tablet and Computer views (currently built for mobile so looks terrible on anything else)
* More tracks

###Audio Files Note

The audio files are not included in this repo. If you want to run this, make sure you adjust the server.js file with the whatever files you want to add. The files were too big to upload.