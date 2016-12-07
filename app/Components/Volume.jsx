import React from 'react'
import Slider from 'material-ui/Slider'

export default class Volume extends React.Component {
    render(){
      let style = {"marginBottom": "35px"}
        return (
              <Slider
                  value={this.props.volume}
                  max={100}
                  min={0}
                  step={10}
                  onChange={this.props.volumeChange}
                  style={style}
                  className="sliderElement"
              />
        );
    }
}
