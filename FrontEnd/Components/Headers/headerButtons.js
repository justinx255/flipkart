import React, { useState, useContext } from 'react';
import { Box, Button, makeStyles, Typography, Badge, Link } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
//component
import LoginDialog from '../Login';
import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';
const useStyle = makeStyles({
	login : {
		background    : '#FFFFFF',
		color         : '#2874f0',
		textTransform : 'none',
		fontWeight    : 600,
		borderRadius  : 2,
		padding       : '5px 40px'
	},
	box   : {
		margin  : '0 5% 0 auto',
		display : 'flex',
		'&>*'   : {
			marginRight : 50,
			alignItems  : 'center'
		}
	},
	cart  : {
		display : 'flex'
	},
	more  : {
		marginTop : 5
	}
});

export default function headerButtons() {
	const classes = useStyle();
	const [
		open,
		setOpen
	] = useState(false);
	const { account, setAccount } = useContext(LoginContext);
	const openLoginDialog = () => {
		setOpen(true);
	};

	return (
		<Box className={classes.box}>
			{
				account ? <Profile account={account} setAccount={setAccount}/> :
				<Link>
					<Button
						variant="contained"
						onClick={() => {
							openLoginDialog();
						}}
						className={classes.login}>
						Login
					</Button>
				</Link>}
			{/* <Link>
				<Typography style={{ marginTop: 5 }}>More</Typography>
			</Link> */}
			<Typography className={classes.more}>More</Typography>
			<Box className={classes.cart}>
				<Badge badgeContent={4} color="secondary">
					<ShoppingCart />
				</Badge>
				<Typography style={{ marginLeft: 10 }}>Cart</Typography>
			</Box>
			<LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
		</Box>
	);
}
