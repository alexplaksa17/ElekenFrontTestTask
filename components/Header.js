
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
require('../styles/header.scss');
export default class Header extends Component {
    render () {
        const {icon,username}=this.props;
        return (
          <header>
            <div className="user">
              <img className="user__image" src={icon}/>
              <span className="user__name">{username}</span>
            </div>
            <div className="navigation">
              <ul className="navigation__list">
                <li className="navigation__list__item"><Link to='/'>How it works</Link></li>
                <li className="navigation__list__item"><Link to='/calendar'>Calendar</Link></li>
                <li className="navigation__list__item"><Link to='/contacts'>Contact us</Link></li>
                <li className="navigation__list__item"><Link to='/portfolio'>Portfolio</Link></li>
              </ul>
            </div>

          </header>
        )
    }
}
