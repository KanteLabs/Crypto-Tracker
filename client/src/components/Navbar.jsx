import React from 'react';
import AppBar from 'material-ui/AppBar';


const Navbar = (props) => {
    const style = {
        'textAlign': 'center',
        'textTransform': 'uppercase'
    }
    function handleMenuClick() {
        props.changeDrawerStatus(true)
    }
    return(
        <AppBar
            style={style}
            title="Crypto Tracker"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick = {handleMenuClick}
        />
    )
}

export default Navbar;