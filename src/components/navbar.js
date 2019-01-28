import React, {Component} from 'react';
import colors from '../constants/colors';
class Navbar extends Component {

    render() {
        return(
            <div className="navbar-fixed">
            <nav style={{background: '#4D5164'}}>
                <div className="nav-wrapper">
                    <a  style={{marginLeft: '10px'}} href="/">
                        <img 
                            src="github-logo.png" 
                            alt="sticky note logo" 
                            className="img-responsive" 
                            style={{width: '60px', float: 'left'}} /> 
                        <span style={{color: colors.textColor, fontWeight: '150', fontSize: '40px'}}>Github</span>
                        <span style={{fontFamily: 'cursive', fontSize: '30px'}}>  Crawler</span>
                    </a>
                </div>
            </nav>
            </div>
        )
    }
}

export default Navbar;