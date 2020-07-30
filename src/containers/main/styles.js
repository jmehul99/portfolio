import { createStyles, makeStyles } from '@material-ui/core';


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
        // [theme.breakpoints.between(744, 1127)]: { margin: "48px 0px" },
        // [theme.breakpoints.down(743)]: { margin: "32px 0px" }
    }
}
));

export default Styles
