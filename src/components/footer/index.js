import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from "react-scroll";

const FooterPagePro = () => {

    return (
        <MDBFooter style={{ backgroundColor: "#161619" }} className="font-small pt-0">
            <MDBContainer>
                <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
                    <MDBCol md="3" className="b-3">
                        <h6 className="title font-weight-bold">
                            <Link
                                to="about"
                                // spy={true}
                                smooth={true}
                                offset={-70}
                                duration={900}
                            >About
                            </Link>
                        </h6>
                    </MDBCol>
                    <MDBCol md="3" className="b-3">
                        <h6 className="title font-weight-bold">
                            <Link
                                to="skills"
                                // spy={true}
                                smooth={true}
                                offset={-70}
                                duration={900}
                            >Skills
                            </Link>
                        </h6>
                    </MDBCol>
                    <MDBCol md="3" className="b-3">
                        <h6 className="title font-weight-bold">
                            <Link
                                to="projects"
                                // spy={true}
                                smooth={true}
                                offset={-70}
                                duration={900}
                            >Projects
                            </Link>
                        </h6>
                    </MDBCol>
                    {/* <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Help</a>
                        </h6>
                    </MDBCol> */}
                    <MDBCol md="3" className="b-3">
                        <h6 className="title font-weight-bold">
                            <Link
                                to="work"
                                // spy={true}
                                smooth={true}
                                offset={-70}
                                duration={900}
                            >Work
                            </Link>
                        </h6>
                    </MDBCol>
                </MDBRow>
                <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
                <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
                    <MDBCol md="8" sm="12" className="mt-5">
                        <p style={{ lineHeight: "1.7rem" }}>
                            I would be glad if you contacted me. I am always looking for new challenges that allow me to improve my skills.
            </p>
                    </MDBCol>
                </MDBRow>
                <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
                <MDBRow className="pb-3">
                    <MDBCol md="12">
                        <div className="mb-5 flex-center">
                            <a className="fb-ic" href="https://www.facebook.com/namanjain2912">
                                <i style={{ marginRight: "6px", marginLeft: "6px" }} className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
                            </a>
                            <a href="https://instagram.com/notty.naman?igshid=88j4nhpo64vd" className="ins-ic">
                                <i style={{ marginRight: "6px", marginLeft: "6px" }} className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
                            </a>
                            <a href="#!" className="li-ic">
                                <i style={{ marginRight: "6px", marginLeft: "6px" }} className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i>
                            </a>
                            <a href="https://bitbucket.org/namanj29/" className="bit-bucket">
                                <i style={{ marginRight: "6px", marginLeft: "6px" }} className="fab fa-bitbucket fa-lg white-text mr-md-4">

                                </i>
                            </a>
                            <a href="https://github.com/namanjain29" className="git-hub">
                                <i style={{ marginRight: "6px", marginLeft: "6px" }} className="fab fa-github fa-lg white-text mr-md-4"> </i>
                            </a>
                            <a href="mailto: namanjain2912@gmail.com">
                                <i style={{ marginRight: "6px", marginLeft: "6px", color: "white" }} className="far fa-envelope fa-lg white-text mr-md-4"> </i>
                            </a>

                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:
          <span> Naman Jain </span>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPagePro;