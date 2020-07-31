import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon, MDBContainer } from 'mdbreact';
import { Grid, Typography, Button } from "@material-ui/core";
import Styles from "./styles.js";


const CardExample = (props) => {
    const project = props.projects
    const styles = Styles()

    return (
        <MDBRow >
            <MDBCol style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                <MDBCard narrow >
                    <MDBView cascade>
                        <MDBCardImage
                            style={{ zIndex: -0.2 }}
                            hover
                            overlay='white-slight'
                            className='card-img-top'
                            src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                            alt='food'
                        />
                    </MDBView>

                    <MDBCardBody className={styles.cardContent} style={{ backgroundColor: "black", marginTop: "-15px", zIndex: "1" }}>
                        <h5 style={{ color: "rgb(217, 191, 119)" }}>
                            <MDBIcon icon={project.icon} /> {project.name}
                        </h5>

                        <MDBCardTitle style={{ color: "white" }}>
                            <Grid container style={{
                                display: "flex",
                                justifyContent: "space-around"
                            }} >
                                {
                                    project.tech.map((val, index) => {
                                        return (
                                            <Grid key={index} style={{
                                                fontSize: "15px",
                                                color: "rgb(131 131 159)",
                                                border: "1.5px solid #8181c6",
                                                borderRadius: "1em",
                                                padding: "0.4em",
                                                margin: "1px",
                                                marginTop: "1rem"

                                            }} item xs={5} sm={3}>{val.tech_name}</Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </MDBCardTitle>

                        <MDBCardText style={{ color: "white" }} >
                            {project.description}
                        </MDBCardText>

                        <MDBBtn color="" style={{ backgroundColor: "rgb(217, 191, 119)", borderRadius: "10em", color: "white" }} >Visit</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>


        </MDBRow >
    )
}

export default CardExample;