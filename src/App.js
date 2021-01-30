import React from 'react'
import { Container } from '@material-ui/core'

import Home from './component/Home/Home'
import Auth from './component/Auth/Auth'

import { BrowserRouter, Switch, Route } from 'react-router-dom'



import Navbar from './component/Navbar/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container >
        </BrowserRouter>
    )
}

export default App
