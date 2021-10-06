import React, { useState } from 'react';
import { Box, Dialog, DialogContent, makeStyles, TextField, Typography, Button } from '@material-ui/core';
import { authenticateSignup,authenticateLogin } from '../../Service/api';
const useStyle = makeStyles({
	component  : {
		height : '70vh',
		width  : '90vh'
	},
	image      : {
		backgroundImage    : `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
		height             : '70vh',
		backgroundRepeat   : 'no-repeat',
		background         : '#2874f0',
		width              : '40%',
		backgroundPosition : 'center 85%',
		padding            : '45px 35px',
		'&>*'              : {
			color      : '#FFFFFF',
			fontWeight : 600
		}
	},
	login      : {
		padding       : '25px 35px',
		display       : 'flex',
		flex          : 1,
		flexDirection : 'column',
		'&>*'         : {
			marginTop : 20
		}
	},
	text       : {
		color    : '#878787',
		fontSize : 12
	},
	loginBtn   : {
		textTransform : 'none',
		background    : '#FB641B',
		color         : '#FFFFFF',
		height        : 48,
		borderRadius  : 2
	},
	requestBtn : {
		textTransform : 'none',
		background    : '#FFFFFF',
		color         : '#2874f0',
		height        : 48,
		borderRadius  : 2,
		boxShadow     : '0 2px 4px 0 rgb(0 0 0 / 20%)'
	},
	createTet  : {
		textAlign  : 'center',
		marginTop  : 'auto',
		fontSize   : 14,
		color      : '#2874f0',
		fontWeight : 600,
		cursor     : 'pointer'
	}
});
const initialValue = {
	login  : {
		view       : 'login',
		heading    : 'Login',
		subHeading : 'Get access to your Orders,Wishlist and Recommendation'
	},
	signup : {
		view       : 'signup',
		heading    : 'Looks like you`re new here!',
		subHeading : 'Sign up with your mobile number to get started'
	}
};
const loginInitialValues={
	username:'',
	password:''
}

const signupInitialValues = {
	firstname : '',
	lastname  : '',
	username  : '',
	email     : '',
	password  : '',
	phone     : ''
};
export default function Login({ open, setOpen, setAccount }) {
	const classes = useStyle();

	const [
		account,
		toggleAccount
	] = useState(initialValue.login);
	const [
		signup,
		setSignup
	] = useState(signupInitialValues);
	const [login,setLogin]=useState(loginInitialValues)
	const handleClose = () => {
		setOpen(false);
		toggleAccount(initialValue.login);
	};
	const toggleUserAccount = () => {
		toggleAccount(initialValue.signup);
	};
	const signupUser = async () => {
		let response = await authenticateSignup(signup);
		if (!response) return;
		handleClose();
		setAccount(signup.username);
	};

	const loginUser=async()=>{
		let response = await authenticateLogin(login);
		if(!response) return;
		handleClose();
		setAccount(login.username);
	}

	const onInputChange = (e) => {
		setSignup({ ...signup, [e.target.name]: e.target.value });
	};
	const onValueChange=(e)=>{
setLogin({...login,[e.target.name]:e.target.value})

	}
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogContent className={classes.component}>
				<Box style={{ display: 'flex ' }}>
					<Box className={classes.image}>
						<Typography variant="h5">{account.heading}</Typography>
						<Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
					</Box>
					{
						account.view === 'login' ? <Box className={classes.login}>
							<TextField onChange={(e)=>onValueChange(e)} name="username" label="Enter Email/Mobile Number" />
							<TextField onChange={(e)=>onValueChange(e)} name="password" label="Enter Password" />
							<Typography className={classes.text}>
								By Contuing,you agree to Flipkart's Terms of Use and Privacy Policy.
							</Typography>
							<Button variant="contained" onClick={()=>loginUser()} className={classes.loginBtn}>
								Login
							</Button>
							<Typography
								className={classes.text}
								style={{
									textAlign : 'center'
								}}>
								OR
							</Typography>
							<Button variant="contained" className={classes.requestBtn}>
								Request OTP
							</Button>
							<Typography onClick={() => toggleUserAccount()} className={classes.createTet}>
								New to FlipKart? Create an Account
							</Typography>
						</Box> :
						<Box className={classes.login}>
							<TextField name="firstname" onChange={(e) => onInputChange(e)} label="Enter Firstname" />
							<TextField name="lastname" onChange={(e) => onInputChange(e)} label="Enter Lastname" />
							<TextField name="username" onChange={(e) => onInputChange(e)} label="Enter Username" />
							<TextField name="email" onChange={(e) => onInputChange(e)} label="Enter Email" />
							<TextField name="password" onChange={(e) => onInputChange(e)} label="Enter Password" />
							<TextField name="phone" onChange={(e) => onInputChange(e)} label="Enter Phone Number" />
							<Button variant="contained" className={classes.loginBtn} onClick={() => signupUser()}>
								SignUp
							</Button>
						</Box>}
				</Box>
			</DialogContent>
		</Dialog>
	);
}
