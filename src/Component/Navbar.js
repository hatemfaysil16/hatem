import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import Styled from 'styled-components';
import { ButtonContainer } from './Button';




export default class Navbar extends Component{
    render(){
        return(
            <NawWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="story"
                     className="navbar-brand"/>
                </Link>
                <ul className="ul.navbar-nav.align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-Link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span>
                        <i className="fas fa-cart-plus"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NawWrapper>
        )
    }
}

const NawWrapper = Styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`; 