import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BottomMenu extends Component {

    render(){
        return(
            <div className="menu-links">
                <Link to="/"><i className="material-icons">&#xE88A;</i></Link>
                {this.props.authState ? <Link to="/portfolio"><i className="material-icons">&#xE85C;</i></Link> :<Link to="/login"><i className="material-icons">&#xE853;</i></Link>}
                {this.props.authState ? <Link to="/ether-balance"><i className="material-icons">&#xE84F;</i></Link> : null}
            </div>
        )
    }
}

export default BottomMenu;