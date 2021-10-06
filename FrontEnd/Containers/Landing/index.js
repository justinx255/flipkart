import React from 'react';

import Header from '../../Components/Headers';
import NavBar from '../../Components/Navbar';
import Banner from '../../Components/Banner';
import MidSection from '../../Components/MidSection';
import { Box, makeStyles } from '@material-ui/core';
import MultiCarousal from '../../Components/MultiCarousal';
const useStyle = makeStyles({
	banner       : {
		padding    : 10,
		background : '#F2F2F2'
	},
	rightWrapper : {
		background : '#FFFFFF',
		padding    : 5,
		margin     : '12px 0 5px 10px'
	}
});
export default function Landing() {
	const classes = useStyle();
	const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

	return (
		<div>
			<Header />
			<NavBar />
			<Box className={classes.banner}>
				<Banner />
				<Box style={{ display: 'flex' }}>
					<Box style={{ width: '86%' }}>
						<MultiCarousal timer={true} title="Deal of the Day" />
					</Box>
					<Box className={classes.rightWrapper}>
						<img src={adURL} style={{ width: 230, height: 'auto' }} />
					</Box>
				</Box>
				<MidSection />
				<MultiCarousal timer={false} title="Discounts for You" />
				<MultiCarousal timer={false} title="Suggested Items" />
				<MultiCarousal timer={false} title="Top Selection" />
				<MultiCarousal timer={false} title="Recommended Items" />
				<MultiCarousal timer={false} title="BestSellers" />
			</Box>
		</div>
	);
}
