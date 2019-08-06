import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render(){
        return (
            <div className="header">
                <div className="navbarItem">
                    <img src={require('../../public/images/back.png')} alt="back"/>
                </div>
                <div className="navbarCenter">
                    这是标题呀
                </div>
                <div className="navbarItem">
                </div>
            </div>
        )
    }
}

export default Header;