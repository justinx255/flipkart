import React from "react";

import { navData } from "../../Data/navbarDraw";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
    mainbox: {
        display: "flex",
        margin: "3% 7% 0 7%",
        "&>*": {
            marginRight: 50,
        },
    },
    cont: {
        textAlign: "center",
    },
    image: {
        width: 14
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }
});
export default function NavBar() {
    const classes = useStyle();
    return (
        <div>
            <Box className={classes.mainbox}>
                {navData.map((data) => {
                    return (
                        <Box className={classes.cont}>
                            <img src={data.url} className={classes.width} />
                            <Typography >{data.text}</Typography>
                        </Box>
                    );
                })}
            </Box>
        </div>
    );
}
