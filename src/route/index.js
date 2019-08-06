import React, {Component} from 'react'
import {Switch, Route,Redirect} from 'react-router-dom'
import Index from '../views/Index'
class RouterIndex extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact render={() => {
                    <Redirect to="/index"/>
                }}>
                <Route path='/index' component={Index} />
                </Route>
            </Switch>
        )
    }
}

export default RouterIndex