import React from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const useStyle = makeStyles({
    login: {
        background: "#FFFFFF",
        color: "#2874f0",
        textTransform: "none",
        fontWeight: 600,
        borderRadius: 2,
        padding: "5px 40px",
    },
    box: {
        margin: "0 5% 0 auto",
        display: "flex",
        "&>*": {
            marginRight: 50,
            alignItems: 'center'
        },
    },
    cart: {
        display: 'flex'
    }, more: {
        marginTop: 5
    }
});

export default function headerButtons() {
    const classes = useStyle();

    return (
        <Box className={classes.box}>
            <Button variant="contained" className={classes.login}>
                Login
            </Button>
            <Typography className={classes.more}>More</Typography>
            <Box className={classes.cart}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography>Cart</Typography>
            </Box>
        </Box>
    );
}
