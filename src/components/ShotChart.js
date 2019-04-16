import React from 'react'
import * as d3 from  "d3"
import { hexbin } from "d3-hexbin";
import { court, shots } from "d3-shotchart"
import nba from "nba";
import { connect }  from "react-redux"
window.d3_hexbin = {hexbin : hexbin} // hexbin library issue



class ShotChart extends React.Component {

  drawChart() {
    console.log('props:', this.props)
    const shot_data = this.props.shots.map(shot => ({
      x: (shot.loc_x + 245) / 10,
      y: (shot.loc_y + 55) / 10,
      action_type: shot.action_type,
      shot_distance: shot.shot_distance,
      shot_made_flag: shot.shot_made_flag,
    })
    )
    const courtSelection = d3.select("#shot-chart");
    const player_court = court().width(600);
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

const mapStateToProps = (state) => {
  return {
    player: state.player,
    shots: state.shots
   }
}

export default connect(mapStateToProps)(ShotChart)
