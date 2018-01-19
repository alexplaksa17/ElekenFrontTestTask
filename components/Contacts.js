import React, {Component} from 'react';
require('../styles/contacts.scss');

class ContactBlock extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    const {name,icon,iconBackGr,href}=this.props;
    const iconStyle={
      backgroundColor: iconBackGr,
    }
    return(
      <div className="contactBlock" onClick={this.arrowOnClick}>
        <div className="contactBlock__icon" style={iconStyle}>
          <img src={icon}/>
        </div>
        <div className="contactBlock__text">
          <span>{name}</span>
        </div>
        <a className="contactBlock__btn" href={href} target="_blank">
          Contact me
          <img src="/img/icon-ar.png"/>
        </a>
      </div>
    )
  }
}



export default class Contacts extends Component {
    render () {
        return (
          <div>
            <h1>Contact me</h1>
            <ContactBlock name="Email" icon='/img/icon-mail.png'
             iconBackGr="red" href="mailto:alexplaksa17@email.com"/>
            <ContactBlock name="Github" icon='/img/icon-github.png'
             iconBackGr="white" href="https://github.com/alexplaksa17"/>
            <ContactBlock name="Facebook" icon='/img/icon-facebook.png'
             iconBackGr="#2161b7" href="https://www.facebook.com/profile.php?id=100013158220295"/>
          </div>

        )
    }
}
