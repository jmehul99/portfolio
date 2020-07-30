import { makeStyles } from '@material-ui/core';


const Styles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up(992)]: { maxWidth: "960px", paddingTop: "20%" },
        [theme.breakpoints.between(768, 991)]: { maxWidth: "720px", paddingTop: "25%" },
        [theme.breakpoints.down(767)]: { maxWidth: "540px", paddingTop: "30%" },
        paddingTop: "25%",
        maxWidth: "720px"
    },
    intro: {
        fontSize: "2.6rem",
    },
    image: {
        [theme.breakpoints.up("md")]: { height: "300px", width: "300px" },
        [theme.breakpoints.only('sm')]: { height: "280px", width: "250px" },
        [theme.breakpoints.only('xs')]: { height: "230px", width: "200px" },
    },
    aboutHead: {
        [theme.breakpoints.down("sm")]: { textAlign: "center" },
        [theme.breakpoints.up("md")]: { textAlign: "left" }
    },
    aboutCont: {
        [theme.breakpoints.down("sm")]: { order: 1 },
        [theme.breakpoints.up("md")]: { order: 2 }
    },
    aboutImg: {
        [theme.breakpoints.down("sm")]: { order: 2 },
        [theme.breakpoints.up("md")]: { order: 1 }
    }

}
));

export default Styles
