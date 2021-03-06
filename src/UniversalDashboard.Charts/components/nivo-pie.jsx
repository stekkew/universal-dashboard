import React from 'react';
import { ResponsivePie, Pie } from '@nivo/pie';

export default class NivoPie extends React.Component {
    onClick(e) {
        if (this.props.hasCallback) {
            UniversalDashboard.publish('element-event', {
                type: "clientEvent",
                eventId: this.props.id,
                eventName: 'onClick',
                eventData: JSON.stringify(e)
            });
        }
    }


    render() {
       if (this.props.responsive) {
            return  <div style={{height: this.props.height}}><ResponsivePie {...this.props} onClick={this.onClick.bind(this)} /></div>
       } else {
           return <Pie {...this.props} onClick={this.onClick.bind(this)}/>
       }
    }
}