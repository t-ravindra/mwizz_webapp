import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>mWizz</h1>
      {/* Link to List.js */}
      <iframe src="http://localhost:5601/app/dashboards#/view/c5dad980-c8c5-11ed-9d11-e58279c99798?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(viewMode:view)" position="relative" height="1000" width="100%"></iframe>
    </div>
    );
  }
}
export default Home;
