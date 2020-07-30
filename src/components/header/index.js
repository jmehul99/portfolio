import React, { Component } from "react";
import {
    MDBNavbar, MDBContainer, MDBNavLink, MDBNavItem, MDBHamburgerToggler, MDBNavbarBrand, MDBNavbarNav,
    MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class Header extends Component {
    state = {
        collapse1: ''
    }

    toggleSingleCollapse = collapseId => () => {
        this.setState({
            [collapseId]: !this.state[collapseId]
        });
    };

    render() {
        return (
            <Router style={{ position: "sticky" }}>
                <MDBNavbar style={{ backgroundColor: "rgb(17 17 17)", color: "white", postion: "relative" }} scrolling fixed="top">
                    <MDBContainer>
                        <MDBNavbarBrand style={{ fontWeight: 600, fontSize: "2rem", letterSpacing: "2px" }}>
                            Naman
                            </MDBNavbarBrand>
                        <MDBHamburgerToggler color="white" id="hamburger1" onClick={this.toggleSingleCollapse('collapse1')} />
                        <MDBCollapse isOpen={this.state.collapse1} navbar >
                            <MDBNavbarNav left >
                                <MDBNavItem active >
                                    <MDBNavLink to="#!">Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#!">Link</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#!">Profile</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </Router>
        );
    }
}

export default Header;