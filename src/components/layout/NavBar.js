import React, { Component } from 'react';
import styled from 'styled-components';

const Branding = styled.a`
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 0.5em;
`;

const NavBarStyle = styled.nav``;

export default class NavBar extends Component {
    render() {
        return (
            <div >
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <a href="navbar" className="navbar-brand col-sm-4 col-md-2 mr-0 align-items-center">Pokedex</a>    
            </nav>
            </div>
        )
    }
}
