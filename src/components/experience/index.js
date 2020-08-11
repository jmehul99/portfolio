import React from 'react'
import { Grid, Typography } from "@material-ui/core";

function Work(props) {
    const work = props.work
    return (
        <>
            <Grid container>
                <Grid data-aos="flip-right" data-aos-duration="2500"
                    item
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} xs={2}>
                    <a href={work.link}>
                        <img style={{ height: "60px", width: "60px" }} src={work.logo} alt="company" />
                    </a>
                </Grid>
                <Grid data-aos="fade-down" data-aos-duration="1500"
                    item style={{ margin: "auto" }} xs={10}>
                    <Grid style={{ marginBottom: "10px" }}>
                        <Typography style={{ textAlign: "left", fontSize: "1.6rem", color: "#504343", marginBottom: "10px", paddingLeft: "25px", borderBottom: "1px solid rgb(195 163 163)" }}>{work.company}</Typography>
                        <Typography style={{ textAlign: "left", fontWeight: 500, color: "#504343", margin: "auto", paddingLeft: "25px" }}>{work.start} - {work.end}</Typography>
                        <Typography style={{ textAlign: "left", fontWeight: 500, color: "#504343", margin: "auto", paddingLeft: "25px" }}>{work.post}</Typography>
                    </Grid>
                    <Grid>
                        <ul>
                            {
                                work.work.map((val, index) => {
                                    return (
                                        <li key={index}>{val}</li>
                                    )
                                })
                            }
                        </ul>
                    </Grid>

                </Grid>
            </Grid>

        </>
    )
}

export default Work

