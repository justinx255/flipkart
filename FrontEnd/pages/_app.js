import React, { Fragment } from 'react';
import App from 'next/app';

import Landing from '../Containers/Landing';
import Cart from '../Containers/Cart';
import { TemplateProvider } from '../templates/TemplateProvider';
import ContextProvider from '../context/ContextProvider';
function myApp() {
	return (
		<TemplateProvider>
			<ContextProvider>
				<Landing />
				{/* <Cart/> */}
			</ContextProvider>
		</TemplateProvider>
	);
}

export default myApp;
