import React, {Component} from 'react';
require('../styles/calculator.scss');
import Datetime from 'react-datetime'
require('../styles/react-datetime.css');





export default class Calculator extends Component {
  constructor(props){
    super(props);
    this.state={
      firstDate:new Date(),
      secondDate:new Date(),
      diff: 0,

    }
  }
  findDiff=(a,b)=>{
    let milSecPerDay=1000*60*60*24;
    let diff  =  Math.abs(b-a)/milSecPerDay;
    this.setState({
      diff:diff,
    })
  }
  firstDateChange=(sendDate)=>{
    this.setState({firstDate: sendDate})
    this.findDiff(sendDate,this.state.secondDate);
  }
  secondDateChange=(sendDate)=>{
    this.setState({secondDate: sendDate})
    this.findDiff(this.state.firstDate,sendDate);
  }

  render () {
    const {firstDate,secondDate,diff}=this.state;
    return (
      <div>
        <h1>Calendar</h1>
        <div className="calculator__inputs">
          <div className="picker">
            <p>DEPARTURE</p>
            <Datetime open={false} closeOnSelect={false} timeFormat={false} value={firstDate} onChange={this.firstDateChange} />
          </div>
          <div className="picker">
            <p>ARRIVING</p>
            <Datetime open={false}  closeOnSelect={false} timeFormat={false} value={secondDate} onChange={this.secondDateChange}/>
          </div>
          <div className="output">
            <p>DAYZ</p>
            <span>{diff}</span>
          </div>
        </div>
      </div>
      )
    }
}
