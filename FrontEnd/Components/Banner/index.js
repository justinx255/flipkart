import { makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../Data/bannerData";
const useStyle = makeStyles({
    image: {
        width: "100%",
        height: 200
    },
});
export default function Banner() {
    const classes = useStyle();
    return (
        <Carousel
            autoPlay={true}
            animation='slide'
            indicators={false}
            // navButtonsAlwaysInvisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    background: '#FFFFFF',
                    color: '#494949'
                }
            }}
        >
            {bannerData.map((image) => (
                <img src={image} className={classes.image} />
            ))}
        </Carousel>
    );
}
