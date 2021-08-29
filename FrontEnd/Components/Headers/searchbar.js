import React from "react";
import { alpha, makeStyles, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
    search: {
        borderRadius: 2,
        backgroundColor: "#fff",
        marginLeft: 10,
        width: "45%",
        display: "flex",
        color: 'black'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: 'blue'
    },
    inputRoot: {
        color: "inherit",
        fontSize: 'unset',
        width: "100%",
    },
    inputInput: {
        paddingLeft: 20
        // vertical padding + font size from searchIcon
    },
}));

export default function Searchbar() {
    const classes = useStyles();

    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search for Products,brands"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
        </div>
        // <div className={classes.grow} />
    );
}
