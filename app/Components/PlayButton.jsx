import React from 'react'
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

export default class PlayButton extends React.Component {

    render(){
      let buttonStyle = {width: "100%", height: "85px"}
      const iconStyle = { fontSize: '65pt'}
      if (!this.props.playing) {
        return (
              <FlatButton
                icon={<FontIcon className="material-icons" style={iconStyle}>play_circle_outline</FontIcon>}
                onClick={() => this.props.togglePlay(true)}
                style={buttonStyle}
                hoverColor="transparent"
              />
        );
      } else {
        return (
              <FlatButton
                icon={<FontIcon className="material-icons" style={iconStyle}>pause_circle_outline</FontIcon>}
                onClick={() => this.props.togglePlay(false)}
                style={buttonStyle}
                hoverColor="transparent"
              />
        );
      }
    }
}
