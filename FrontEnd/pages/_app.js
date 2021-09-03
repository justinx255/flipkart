import React, { Fragment } from "react";
import App from 'next/app'

import Landing from "../Containers/Landing";
import Cart from "../Containers/Cart";

function myApp() {
    return (

        <Fragment>
            {/* <Landing /> */}
            <Cart/>
        </Fragment>
    );

}

export default myApp;