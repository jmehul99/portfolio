import React, { Component } from "react";
import {
    MDBNavbar, MDBContainer, MDBNavItem, MDBHamburgerToggler, MDBNavbarBrand, MDBNavbarNav,
    MDBCollapse
} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from "react-scroll";
import "./styles.css"
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

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

        AOS.init();

        return (
            // <Router style={{ position: "sticky" }}>
            <>
                <MDBNavbar style={{ backgroundColor: "rgb(17 17 17)", color: "white", postion: "relative" }} scrolling fixed="top">
                    <MDBContainer>
                        <MDBNavbarBrand data-aos="zoom-in" data-aos-duration="900">
                            <Link style={{ fontWeight: 600, fontSize: "2rem", letterSpacing: "2px" }}
                                to="main"
                                smooth={true}
                                offset={-70}
                                duration={900}
                                isDynamic={true}
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
                                        isDynamic={true}
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
                                        isDynamic={true}
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
                                        isDynamic={true}
                                    >PROJECTS
                                    </Link>
                                </MDBNavItem>
                                <MDBNavItem style={{ padding: "5px 0px" }}>
                                    <Link
                                        style={{ fontSize: "14px", letterSpacing: "2px", fontWeight: 400 }}
                                        to="work"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={900}
                                        isDynamic={true}
                                    >WORK
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