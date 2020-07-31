import { makeStyles } from '@material-ui/core';


const Styles = makeStyles((theme) => ({
    cardContent: {
        [theme.breakpoints.up(1200)]: { minHeight: "420px" },
        [theme.breakpoints.only("md")]: { minHeight: "520px" },
        [theme.breakpoints.only("sm")]: { minHeight: "590px" },
    }

}
));

export default Styles
