import React from 'react'
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

export default class TrackSelectBar extends React.Component {
	constructor(props) {
		super(props);
		this.trackObj = {
			whiteNoise: {
				id: 0,
				name: 'whiteNoise',
				icon: 'gradient',
				img: 'images/static.gif'
			},
			rain: {
				id: 1,
				name: 'rain',
				icon: 'beach_access',
				img: 'images/rain.gif'				
			},
			dots: {
				id: 2,
				name: 'dots',
				icon: 'hdr_strong',
				img: 'images/dots.gif'
			}
		}
	}

	isActive(value){
		return (value == this.props.track.id) ? 'active' : '';
	}

	render(){
		let trackObj = this.trackObj;
		var IconBar = Object.keys(trackObj).map((b) => {
			let classNames = `material-icons ${trackObj[b].icon}`
			let activeClassDiv = "col-xs-4 text-center " + this.isActive(trackObj[b].id) 
			const iconStyle = { fontSize: '40pt'}
			let buttonStyle = {width: "30%", height: "85px", borderRadius: '50%'}
			return (
					<div key={trackObj[b].id} className={activeClassDiv} onClick={()=>this.props.trackChange(trackObj[b])}>
						<FlatButton 
						 	icon={<FontIcon className={classNames} style={iconStyle}>{trackObj[b].icon}</FontIcon>}
						 	style={buttonStyle}
						 	hoverColor="transparent"
						/>
					</div>
				)
		});
	    return (
	    	<div className="row trackBarRow">
	    		<img src={this.props.track.img} id="trackImg" />
	    		{ IconBar }
	        </div>
	    );
	}
}
