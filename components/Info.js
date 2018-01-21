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
          <br/>
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
                  <pre>git clone https://github.com/alexplaksa17/ElekenFrontTestTask.git</pre>
                  <p><b>Step2:</b> go to project directory</p>
                  <pre>cd ElekenFrontTestTask</pre>
                  <p><b>Step3:</b> install npm packages</p>
                  <pre>npm i</pre>
                </InfoBlock>
                <InfoBlock icon='/img/icon-question.png'
                 iconBackGr="#24b1e7" title="How to Run App">
                 <p><b>Step1:</b> go to project directory</p>
                 <p><b>Step2:</b> run the application (with webpack dev server files auto-reload)</p>
                 <pre>npm run dev</pre>
                </InfoBlock>
                <InfoBlock icon='/img/icon-flag.png'
                 iconBackGr="#00c2a5" title="Used components and packages">
                 <p>App was built from scratch, I use npm for packages managing, webpack-dev-server for live reloading,
                 react-datetime and moment.js in Calendar component.</p><p> However,
                 in task layout was used other way to render weekday name(only first letter instead of two letters as in date picker from package),
                 and there was not api to change this, I fork this package and make change directly in scr file.</p><p> So, in package.json you can see link to my github fork of that repo.
                 Also, according to the api, I add handlers and methods and change react-datetime.css file to match the appearance of the layout.</p>


                </InfoBlock>
                <InfoBlock icon='/img/icon-eye.png'
                 iconBackGr="#ecbf00" title="Calendar use guide">
                 <p>You can use Calendar to count number of days in the trip. Note, that you can`t choose impossible dates of start or finish journey, it will be very strange if you arrive earlier than leaving )
                 </p>



                </InfoBlock>
            </div>
        )
    }
}
