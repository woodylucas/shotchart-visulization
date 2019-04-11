import React from 'react'
import * as d3 from  "d3"
import { hexbin } from "d3-hexbin";
import { court, shots } from "d3-shotchart"
import { connect } from 'react-redux'
window.d3_hexbin = {hexbin : hexbin} // hexbin library issue



const data = [
  {
    "x": -87,
    "y": 183
  },
  {
    "x": 20.5,
    "y": 27.55
  },
  {
    "x": 15.3,
    "y": 30.45,
  },
  {
    "x": 21,
    "y": 25

  }
]


class ShotChart extends React.Component {


  componentDidMount(){
    // fetch('http://localhost:3000/players/1626159?season="2017-18"')
    // .then(resp => resp.json())
    // .then(player => this.setState({ player, shots }))

  }


  drawChart() {
    console.log(this.props.shots);
    const shot_data = this.props.shots.map(shot => ({
      x: (shot.loc_x + 250) / 10,
      y: (shot.loc_y + 50) / 10,
      action_type: shot.action_type,
      shot_distance: shot.shot_distance,
      shot_made_flag: shot.shot_made_flag
    }) )
    console.log('shot:', shot_data)
    const courtSelection = d3.select("#shot-chart");
    const player_court = court().width(500);
    const player_shots = shots()
                    .shotRenderThreshold(1)
                    .displayToolTips(true)
                    .displayType("hexbin");
    courtSelection.call(player_court);
    courtSelection.datum(shot_data).call(player_shots);
  }


  render(){
    this.drawChart()
    return(
      <div id="shot-chart"></div>
    )
  }
}

const mapStateToProps = state => {
  return { player: state.player, shots: state.shots }
}
export default connect(mapStateToProps)(ShotChart)
