import React, {Component} from 'react';
require('../styles/info.scss');
class InfoBlock extends Component{
  constructor(props){
    super(props);
    this.state={
      isFolded:true,
    }
  }
  arrowOnClick=()=>{
    this.setState({
      isFolded: !this.state.isFolded,
    })

  }
  render() {
    const {children,icon,iconBackGr,title}=this.props;
    const {isFolded}=this.state;
    const iconStyle={
      backgroundColor: iconBackGr,
    }
    return(
      <div className="infoBlock" onClick={this.arrowOnClick}>
        <div className="infoBlock__icon" style={iconStyle}>
          <img src={icon}/>
        </div>
        <div className="infoBlock__text">
          <span>{title}</span>
          { !this.state.isFolded && children}

        </div>
        <div className="infoBlock__arrow">
            <img src={isFolded ? '/img/icon-arrow-folded.png' : '/img/icon-arrow-deployed.png'}
            />
        </div>
      </div>
    )
  }
}

export default class Info extends Component {
    render () {
        return (
            <div>
              <h1>Alex Plaksa App</h1>
                <InfoBlock icon='/img/icon-list.png'
                 iconBackGr="#1367d7" title="How to Setup">
                  <p><b>Step1:</b> git clone this repo</p>
                  <pre>git clone </pre>
                  <p><b>Step2:</b> git clone this repo</p>
                  <p><b>Step3:</b> git clone this repo</p>
                </InfoBlock>
                <InfoBlock icon='/img/icon-question.png'
                 iconBackGr="#24b1e7" title="How to Run App">
                  <p>Step1: git clone this repo</p>
                  <p>Step1: git clone this repo</p>
                  <p>Step1: git clone this repo</p>
                </InfoBlock>
                <InfoBlock icon='/img/icon-flag.png'
                 iconBackGr="#00c2a5" title="Standart Compliant">
                  <p>Step1: git clone this repo</p>
                  <p>Step1: git clone this repo</p>
                  <p>Step1: git clone this repo</p>
                </InfoBlock>
                <InfoBlock icon='/img/icon-eye.png'
                 iconBackGr="#ecbf00" title="Secrets">
                  <p>Step1: git clone this repo</p>
                  <p>Step1: git clone this repo</p>
                  <p>Step1: git clone this repo</p>
                </InfoBlock>
            </div>
        )
    }
}
