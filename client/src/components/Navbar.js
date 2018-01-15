import React from 'react';
import AppBar from 'material-ui/AppBar';


const Navbar = (props) => {
    function handleMenuClick() {
        alert()
    }
    return(
        <AppBar
            title="Portfolio Watcher"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick = {handleMenuClick}
        />
    )
}

export default Navbar;