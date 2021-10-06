import React, { useState } from 'react';
import { Menu, MenuItem, Typography, makeStyles } from '@material-ui/core';
import { PowerSettingsNew } from '@material-ui/icons';
import {Link} from 'react-router-dom'
const useStyle = makeStyles({
	component : {
		marginTop : 40
	},
  logout:{
    marginLeft:20,
    fontSize:14
  }
});
const Profile = ({ account, setAccount }) => {
	const [
		open,
		setOpen 
	] = useState(false);
	const classes = useStyle();

	const handleClose = () => {
		setOpen(false);
	};
	const handleClick = (event) => {
		setOpen(event.currentTarget);
	};
	return (
		<React.Fragment>
      <Link>
			<Typography onClick={handleClick} style={{ marginTop: 4 }}>
				{account}
			</Typography>
      </Link>
			<Menu anchorEl={open} open={Boolean(open)} onClose={handleClose} className={classes.component}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My Account</MenuItem>
				<MenuItem onClick={handleClose}>
					<PowerSettingsNew fontSize="small" color="primary" />
					<Typography className={classes.logout}>Logout</Typography>
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
};
export default Profile;
