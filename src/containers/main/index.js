import React from 'react'
import Header from "../../components/header"
import { Grid, Typography, Button } from "@material-ui/core";
import background from "../../images/bg.jpg";
import Styles from "./styles.js";
import naman from "../../images/me.jpeg";
import skills from "../../content/properties";
import Footer from "../../components/footer";
import Card from "../../components/projects";
import projects from "../../content/projects"
import experience from "../../content/experience";
import Work from "../../components/experience"
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

function fullpage() {
    const styles = Styles()
    AOS.init();
    return (
        <>

            <Grid id="main">
                <Grid style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100vh"
                }}>
                    <Header />
                    <Grid container className={styles.container} style={{
                        width: "100%",
                        paddingRight: "15px",
                        paddingLeft: "15px",
                        marginRight: "auto",
                        marginLeft: "auto"
                    }} >
                        <Grid item sm={12}>
                            <Typography data-aos="fade-right" data-aos-duration="1200" variant="h1" className={styles.intro} style={{
                                fontWeight: 400,
                                color: "white",
                                marginBottom: "1rem",

                            }}>
                                Hello, I'm <span style={{ color: "#dabf78" }}>Naman Jain</span>.

                            </Typography>

                            <Typography data-aos="fade-left" data-aos-duration="1200" variant="h1" style={{
                                fontWeight: 400,
                                marginBottom: "4rem",
                                color: "white"
                            }} className={styles.intro}>
                                I'm a full-stack web developer.
                        </Typography>
                        </Grid>

                        <Grid item>
                            <Button data-aos="fade-down" data-aos-duration="1200" variant="contained" style={{ backgroundColor: "rgb(218, 191, 120)", color: "white", borderRadius: "10em" }}>
                                Download CV
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                {/* About */}

                <Grid id="about" container style={{
                    paddingTop: "5rem",
                    paddingBottom: "5rem"
                }}>
                    <Grid className={styles.aboutImg} item xs={12} md={5} >
                        <Grid style={{
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",

                        }} >
                            <img data-aos="flip-down" data-aos-duration="1200" className={styles.image} alt="me" style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderRadius: "5%",
                                padding: "4px",
                                border: "1.5px solid #d9bf77"
                            }} src={naman}></img>
                        </Grid>
                    </Grid>
                    <Grid data-aos="fade-down" data-aos-duration="1200" className={styles.aboutCont} item xs={12} md={6} >
                        <Grid style={{ paddingRight: "2rem", paddingLeft: "2rem" }}>
                            <h2 className={styles.aboutHead} style={{
                                paddingBottom: "10px",
                                marginBottom: "2rem",
                            }}> <span style={{
                                borderBottom: "1px solid #d9bf77", fontFamily: "Poppins",
                                fontWeight: 400,
                                color: "#232332",
                            }}>About me</span></h2>
                            <Typography style={{
                                textAlign: "left", fontWeight: 300,
                                color: "#666",
                                fontSize: "18px",
                                marginBottom: "16px"
                            }}>A Full-stack Web Developer who is motivated to constantly develop new skills and grow professionally.
                            </Typography>
                            <ul>
                                <li>Sophomore undergraduate at <b>University School of Information and Communication Technology.</b></li>
                                <li>CBSE XII Boards  - <b>St. Joseph's Academy, Savita Vihar</b></li>
                                <li>Scored <b>714</b> rank in IPUCET </li>
                                <li>Scored <b>95% in Maths</b> and <b>94% in Physics</b> in CBSE XII boards</li>
                                <li>Scored <b>10 CGPA</b> in CBSE X boards </li>
                            </ul>

                        </Grid>
                    </Grid>
                </Grid>

                {/* Skill */}

                <Grid id="skills" container style={{
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                    backgroundColor: "#f8f8f8"
                }}>
                    <Grid data-aos="zoom-in" data-aos-duration="1200" item xs={12} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Typography variant={"h4"} style={{
                            textAlign: "center", borderBottom: "1px solid #d9bf77",
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            color: "#232332",
                            display: "inline-block",
                            marginBottom: "16px",
                            paddingBottom: "10px"
                        }}>
                            Skills
                        </Typography>
                    </Grid>

                    <Grid item xs={12} style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                        {skills.map((val, index) => {
                            return (
                                <Grid key={index} container >
                                    <Grid item xs={12}>
                                        <Typography style={{
                                            fontSize: "20px",
                                            fontWeight: 500,
                                            color: "#d9bf77",
                                            marginBottom: "10px",
                                            padding: "0px 8px"
                                        }}>{val.skill_name}</Typography>
                                        <Grid container style={{ marginBottom: "25px" }}>
                                            {
                                                val.skills.map((value, index) => {
                                                    return (
                                                        <Grid key={index} style={{ padding: "0px 8px" }} item xs={6} sm={4} sm={3}>
                                                            <Typography style={{
                                                                fontWeight: "500",
                                                                padding: "16px 0px",
                                                                borderBottom: "1px solid rgb(221, 221, 221)"
                                                            }}>{value.skill}</Typography>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>

                                    </Grid>
                                </Grid>
                            )
                        })
                        }
                    </Grid>
                </Grid>

                {/* Projects */}

                <Grid id="projects" container style={{
                    paddingTop: "5rem",
                    paddingBottom: "5rem",
                }}>
                    <Grid data-aos="zoom-in" data-aos-duration="1200" item xs={12} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Typography variant={"h4"} style={{
                            textAlign: "center", borderBottom: "1px solid #d9bf77",
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            color: "#232332",
                            display: "inline-block",
                            marginBottom: "16px",
                            paddingBottom: "10px"
                        }}>
                            Projects
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ paddingLeft: "10%", paddingRight: "10%" }}>

                        <Grid container spacing={4}>
                            {
                                projects.map((val, index) => {
                                    return (
                                        <Grid key={index} item sm={6} md={4}>
                                            <Card projects={val} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>

                    </Grid>
                </Grid>

                <Grid container id="work" style={{
                    paddingTop: "5rem",
                    paddingBottom: "5rem"
                }}>
                    <Grid item data-aos="zoom-in" data-aos-duration="1200" xs={12} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Typography variant={"h4"} style={{
                            textAlign: "center", borderBottom: "1px solid #d9bf77",
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            color: "#232332",
                            display: "inline-block",
                            marginBottom: "16px",
                            paddingBottom: "10px"
                        }}>
                            Experienece
                        </Typography>
                    </Grid>

                    <Grid item xs={12} style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "30px" }}>
                        {
                            experience.map((val, index) => {
                                return (

                                    <Work key={index} work={val} />

                                )
                            })
                        }
                    </Grid>


                </Grid>


            </Grid>
            <Footer />
        </>
    )
}

export default fullpage
