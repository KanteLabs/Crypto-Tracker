import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Redirect } from 'react-router-dom';


const Navbar = (props) => {
    const style = {
        'textAlign': 'center',
        'textTransform': 'uppercase'
    }
    function handleMenuClick() {
        props.changeDrawerStatus(true)
    }
    function handleTitleClick() {
        return <Redirect to="/" />;
    }
    return(
        <AppBar
            style={style}
            title="Crypto Tracker"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonClick = {handleMenuClick}
            onTitleClick = {handleTitleClick}
        />
    )
}

export default Navbar;