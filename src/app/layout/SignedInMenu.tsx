import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../features/account/accountSlice";
import { clearbasket } from "../../features/basket/basketSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

export default function SignedInMenu(){
    const dispatch=useAppDispatch();
    const {user}=useAppSelector(state=>state.account);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // const handleSignOut = () => {
    //     dispatch(signOut());
    //     navigate('/');
    // };

  return (
    <>
      <Button 
        color='inherit'
        onClick={handleClick}
        sx={{typography:'h6'}}>
        {user?.email}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
       
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem LinkComponent={Link} href='/orders' >My orders</MenuItem>
        <MenuItem onClick={()=>{
            dispatch(signOut());
            dispatch(clearbasket());
        } }>Logout</MenuItem>
      </Menu>
    </>
  );
}