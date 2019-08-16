import React, {Component} from 'react'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    increament(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return (
            <div>
                <div>count: {this.state.value}</div>
                <button onClick={() => {this.increament()}}>冲呀</button>
            </div>
        )
    }
}
export default Index