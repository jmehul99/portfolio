import React from 'react'
import Header from "../../components/header"
import { Grid, Typography, Button, Hidden } from "@material-ui/core";
import background from "../../images/bg.jpg";
import Styles from "./styles.js";


function fullpage() {
    const styles = Styles()
    return (
        <>

            <Grid>
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
                            <Typography variant="h1" className={styles.intro} style={{
                                fontWeight: 400,
                                color: "white",
                                marginBottom: "1rem",

                            }}>
                                Hello, I'm <span style={{ color: "#dabf78" }}>Naman Jain</span>.

                            </Typography>

                            <Typography variant="h1" style={{
                                fontWeight: 400,
                                marginBottom: "4rem",
                                color: "white"
                            }} className={styles.intro}>
                                I'm a full-stack web developer.
                        </Typography>
                        </Grid>

                        <Grid item>
                            <Button variant="contained" style={{ backgroundColor: "rgb(218, 191, 120)", color: "white", borderRadius: "10em" }}>
                                Download CV
</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography>NAMAN</Typography>

                </Grid><Grid>
                    <Typography>NAMAN</Typography>

                </Grid><Grid>
                    <Typography>NAMAN</Typography>

                </Grid><Grid>
                    <Typography>NAMAN</Typography>

                </Grid>
            </Grid>
        </>
    )
}

export default fullpage
