import React, {Component} from 'react'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            footerList: [{
                text: "创客中心",
                link: "/ckCenter",
                img: require('../../public/images/tabbar/tabbar01.png')
            },{
                text: "云商城",
                link: "/cloudStore",
                img: require('../../public/images/tabbar/tabbar02.png')
            },{
                text: "个人中心",
                link: "/userCenter",
                img: require('../../public/images/tabbar/tabbar03.png')
            }]
        }
    }
    render(){
        return (
            <div className="footer">
                {this.state.footerList.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <img src={item.img} alt=""/>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Footer