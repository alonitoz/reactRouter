import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ButtonAppBar = props => {
    return(
        <div>
            <AppBar>
               <ToolBar>
                    <IconButton  color="inherit" >
                        <MenuIcon/>
                    </IconButton>
                   <Typography variant="h6" color="inherit">
                       Home Page
                   </Typography>
                   <Button color="inherit" >
                       Login
                   </Button>
               </ToolBar>
            </AppBar>
        </div>
    )
}

export default ButtonAppBar;