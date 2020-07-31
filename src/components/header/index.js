import React, { Component } from "react";
import {
    MDBNavbar, MDBContainer, MDBNavLink, MDBNavItem, MDBHamburgerToggler, MDBNavbarBrand, MDBNavbarNav,
    MDBCollapse
} from "mdbreact";
// import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles.css"


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
            // <Router style={{ position: "sticky" }}>
            <>
                <MDBNavbar style={{ backgroundColor: "rgb(17 17 17)", color: "white", postion: "relative" }} scrolling fixed="top">
                    <MDBContainer>
                        <MDBNavbarBrand >
                            <Link style={{ fontWeight: 600, fontSize: "2rem", letterSpacing: "2px" }}
                                to="main"
                                smooth={true}
                                offset={-70}
                                duration={900}
                            >Naman.
                            </Link>
                        </MDBNavbarBrand>
                        <MDBHamburgerToggler color="white" id="hamburger1" onClick={this.toggleSingleCollapse('collapse1')} />
                        <MDBCollapse isOpen={this.state.collapse1} navbar >
                            <MDBNavbarNav left >
                                <MDBNavItem style={{ padding: "5px 0px" }} >
                                    <Link
                                        style={{ fontSize: "14px", letterSpacing: "2px", fontWeight: 400, }}
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={900}
                                    >ABOUT
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem style={{ padding: "5px 0px" }}>
                                    <Link
                                        style={{ fontSize: "14px", letterSpacing: "2px", fontWeight: 400 }}
                                        to="skills"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={900}
                                    >SKILLS
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem style={{ padding: "5px 0px" }}>
                                    <Link
                                        style={{ fontSize: "14px", letterSpacing: "2px", fontWeight: 400 }}
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={900}
                                    >PROJECTS
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem style={{ padding: "5px 0px" }}>
                                    <Link
                                        style={{ fontSize: "14px", letterSpacing: "2px", fontWeight: 400 }}
                                        to="Contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={900}
                                    >CONTACT
                                    </Link>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                {/* </Router> */}
            </>
        );
    }
}

export default Header;