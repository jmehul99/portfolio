import { makeStyles } from '@material-ui/core';


const Styles = makeStyles((theme) => ({
    cardContent: {
        [theme.breakpoints.up(1200)]: { minHeight: "380px" },
        [theme.breakpoints.only("md")]: { minHeight: "460px" },
        [theme.breakpoints.only("sm")]: { minHeight: "440px" },
    },
    imagesSize: {
        [theme.breakpoints.up(1200)]: { height: "300px", maxWidth: "400px" },
        [theme.breakpoints.only("md")]: { height: "250px", maxWidth: "350px" },
        [theme.breakpoints.only("sm")]: { height: "200px", maxWidth: "350px" },
        [theme.breakpoints.only("xs")]: { height: "200px", maxWidth: "400px" },
    }

}
));

export default Styles
