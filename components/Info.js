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
                 iconBackGr="#00c2a5" title="Dependencies">
                 <table>
                   <tr>
                     <th>Package</th>
                     <th>Version</th>
                   </tr>
                   <tr>
                     <td>react</td>
                     <td>16.2.0</td>
                   </tr>
                   <tr>
                     <td>react-dom</td>
                     <td>16.2.0</td>
                   </tr>
                   <tr>
                     <td>react-router</td>
                     <td>4.2.0</td>
                   </tr>
                   <tr>
                     <td>react-router-dom</td>
                     <td>4.2.2</td>
                   </tr>
                   <tr>
                     <td>webpack</td>
                     <td>3.10.0</td>
                   </tr>
                   <tr>
                     <td>webpack-dev-server</td>
                     <td>2.11.0</td>
                   </tr>
                   <tr>
                     <td>babel-preset-es2015</td>
                     <td>6.24.1</td>
                   </tr>
                   <tr>
                     <td>react-datetime</td>
                     <td>2.11.1</td>
                   </tr>
                 </table>
                </InfoBlock>
                <InfoBlock icon='/img/icon-eye.png'
                 iconBackGr="#ecbf00" title="Notes">
                  <ul>
                    <li>change Calendar component whith custom design from psd layout</li>
                    <li>rewrite Dependencies chapter(get data from package.json directly)</li>
                    <li>this list may be updated soon...</li>
                  </ul>
                </InfoBlock>
            </div>
        )
    }
}
