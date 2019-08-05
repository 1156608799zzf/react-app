import React, {Component} from 'react';
import Header from './views/Header'
import Footer from './views/Footer'
class App extends Component {
    render() {
        return (
            <div className="app">
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
