import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import Index from '../views/Index'
class RouterIndex extends Component {
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/index" />
                    )} />
                    <Route path='/index' component={Index} />
                </Switch>
            </HashRouter>
        )
    }
}

export default RouterIndex