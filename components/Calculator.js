import React, {Component} from 'react';
require('../styles/calculator.scss');
import Datetime from 'react-datetime'
require('../styles/react-datetime.css');
var moment = require('moment');
class DateInfo extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render(){
    const {fieldName,value,isActive,onClick}=this.props;

    const activeStyle={
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.09)',

    }

    return(
      <div style={isActive?activeStyle:{}} className="picker" onClick={onClick}>
        <span className="input__name">{fieldName.toUpperCase()}</span>
        <span className="input__value">{value.format('L')}</span>
      </div>
    )
  }

}
class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render(){

    const {value,onChange,renderDay,isActive,onClick,isValidDate}=this.props;



    const activeStyle={
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.09)',
      background: '#fff',
      margin:'1px -2px 1px -2px',
      zIndex: 99999,
      borderCollapse: 'collapse',




    }
    const inactiveStyle={

      border: '1px solid #cbcbcb',
      borderRadius: 2,
      background: '#fff',
      borderCollapse: 'collapse',



    }



    return(
      <div style={isActive?activeStyle:inactiveStyle} onClick={onClick}>
        <Datetime
          input={false}
          timeFormat={false}
          value={value}
          onChange={onChange}
          renderDay={renderDay}
          isValidDate={isValidDate}
        />
      </div>
    );
  }
}

export default class Calculator extends Component{
  constructor(props){
    super(props);
    this.state={
      firstDate:moment(),
      secondDate:moment(),
      diff: 0,
      activeWindow:'second',
    }
  }
  firstDateChange=(newDate)=>{
    this.setState({firstDate: newDate})
    this.findDiff(newDate,this.state.secondDate);
  }
  secondDateChange=(newDate)=>{
    this.setState({secondDate: newDate})
    this.findDiff(this.state.firstDate,newDate);
  }
  findDiff=(a,b)=>{
    //let diff  =  Math.abs(b-a)/(1000*60*60*24);
    this.setState({
      diff:b.diff(a, 'days')+1,
    })
  }

  //render highlighted dates that are between selected ones in calendars
  renderDay = ( props, currentDate, selectedDate )=>{

    const {firstDate,secondDate}=this.state;
    //console.log(selectedDate.format('ll'));
    console.log();
    if (currentDate.format('ll')!==selectedDate.format('ll'))
    {
      if (firstDate < currentDate || (firstDate.format('ll')==currentDate.format('ll'))) { //operator <= is not working as expected
        if(secondDate > currentDate)
        return <td {...props} style={{backgroundColor: "#eaf1fc"}}>{currentDate.date() }</td>;

      }

    }
      return <td {...props} >{currentDate.date() }</td>;
  }

  activeFirstWindow=()=>{
    this.setState({
      activeWindow:'first'
    })
  }
  activeSecondWindow=()=>{
    this.setState({
      activeWindow:'second'
    })
  }
  validArrivingDates=(currentDate)=>{
    return ((currentDate>this.state.firstDate)|| (this.state.firstDate.format('ll')==currentDate.format('ll')))
  }
  validDepartureDates=(currentDate)=>{
    return ((currentDate<this.state.secondDate)|| (this.state.secondDate.format('ll')==currentDate.format('ll')))
  }







  render () {
    const {firstDate,secondDate,diff,activeWindow}=this.state;
    return (
      <div>
        <h1>Calendar</h1>
        <div className="calculator__block">
          <div className="rowo">
            <DateInfo isActive={activeWindow=='first'} fieldName="departure" value={firstDate} onClick={this.activeFirstWindow}/>
            <DateInfo isActive={activeWindow=='second'} fieldName="arriving" value={secondDate} onClick={this.activeSecondWindow}/>
            <div className="picker output">
              <span className="input__name">{"days".toUpperCase()}</span>
              <span className="input__value">{diff}</span>
            </div>
          </div>
          <div className="rowo">
            <DatePicker
              isActive={activeWindow=='first'}
              onClick={this.activeFirstWindow}
              value={firstDate}
              onChange={this.firstDateChange}
              renderDay={this.renderDay}
              isValidDate={this.validDepartureDates}/>
            <DatePicker
              isActive={activeWindow=='second'}
              onClick={this.activeSecondWindow}
              value={secondDate}
              onChange={this.secondDateChange}
              renderDay={this.renderDay}
              isValidDate={this.validArrivingDates}/>
          </div>

        </div>
      </div>
      )
    }


}




/*
constructor(props){
  super(props);
  this.state={
    date: this.props.date,
  }
  render()

  {
    <div>
      <span className="inputName">DEPARTURE</span>
    </div>


  }
}
}


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
  let diff  =  Math.abs(b-a)/(1000*60*60*24);
  this.setState({
    diff:diff,
  })
}
firstDateChange=(sendDate)=>{
  console.log(sendDate._i);
  this.setState({firstDate: sendDate})
  this.findDiff(sendDate,this.state.secondDate);
}
secondDateChange=(sendDate)=>{
  console.log(sendDate);
  this.setState({secondDate: sendDate})
  this.findDiff(this.state.firstDate,sendDate);
}
isInBetween=(date)=>{
  const {firstDate,secondDate}=this.state;
  const inIt =((firstDate<date.date()) && (secondDate>date.date()))
  return inIt;
}
renderDay = ( props, currentDate, selectedDate )=>{
  if (this.isInBetween(currentDate)) {
    return <td {...props} style={{backgroundColor: "#eaf1fc"}}>{currentDate.date() }</td>;
  }
  else{
    return <td {...props} >{currentDate.date() }</td>;
  }
}

render () {
  const {firstDate,secondDate,diff}=this.state;
  return (
    <div>
      <h1>Calendar</h1>
      <div className="calculator__block">
        <div className="picker">
          <span>DEPARTURE</span>
          <Datetime closeOnSelect={false} timeFormat={false} value={firstDate} onChange={this.firstDateChange}
            renderDay={ this.renderDay }
          />
        </div>
        <div className="picker">
          <span>ARRIVING</span>
          <Datetime closeOnSelect={false} timeFormat={false} value={secondDate} onChange={this.secondDateChange}
            renderDay={ this.renderDay }
          />
        </div>
        <div className="output">
          <span class="output__name">DAYS</span>
          <span>{diff}</span>
        </div>
      </div>
    </div>
    )
  }
*/
