import React from "react";

import Header from "../../Components/Headers";
import NavBar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    banner: {
        padding: 10,
        background: '#F2F2F2'
    }
})
export default function Landing() {
    const classes = useStyle()
    return (
        <div>
            <Header />
            <NavBar />
            <Box className={classes.banner}>
                <Banner />
            </Box>
        </div>
    );
}
