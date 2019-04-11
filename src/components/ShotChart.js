import React from 'react'
import * as d3 from  "d3"
import { hexbin } from "d3-hexbin";
import { court, shots } from "d3-shotchart"

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
    this.drawChart()
  }

  drawChart() {
    const courtSelection = d3.select("#shot-chart");
    const player_court = court().width(500);
    const player_shots = shots()
                    .shotRenderThreshold(1)
                    .displayToolTips(true)
                    .displayType("hexbin");
    courtSelection.call(player_court);
    courtSelection.datum(data).call(player_shots);
    console.log(player_court)
  }


  render(){
    return(
      <div id="shot-chart"></div>
    )
  }
}

export default ShotChart
