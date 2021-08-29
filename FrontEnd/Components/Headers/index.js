import React from "react";
import { Typography, AppBar, Toolbar, makeStyles } from "@material-ui/core";
import SearchBar from "./searchbar";
import HeaderButtons from "./headerButtons";
const useStyle = makeStyles({
    toolbar: {
        backgroundColor: "#2874F0",
        display: "flex",
    },
    Shop: {
        fontSize: "150%",
        marginLeft: "10%",
    },
});

export default function Header() {
    const classes = useStyle();
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.Shop}>J Shop</Typography>
                <SearchBar />
                <HeaderButtons />
            </Toolbar>
        </AppBar>
    );
}
