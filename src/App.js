import React, {Component} from 'react';
import Header from './views/Header'
import Footer from './views/Footer'
// import RouterIndex from './route/index'
class App extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="app">
                <Header></Header>
                {/*<RouterIndex />*/}
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
