import React, {Component} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import RouterIndex from './route/index'
import {Provider} from 'react-redux'
import store from './redux/Store'
class App extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="app">
                <Header></Header>
                <div className="containerView">
                    <Provider store={store}>
                        <RouterIndex />
                    </Provider>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
