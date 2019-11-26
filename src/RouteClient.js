import React, { Component } from 'react';
// import CircularIndeterminate from './component/Progress'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './view/Home'
import AppDetail from './view/AppDetail'

class RouteClient extends Component {

  render() {
    const appId = {
      eLearning: {
        _id: "5ddac521994348159c4d2d73",
        name: "eLearning",
        iconUrl: "https://www.dropbox.com/s/uuj0kgd06vezgvz/eLeaning_white_ios.png?dl=1"
      },
      mobile4Fiser: {
        _id: "5ddac521994348159c4d2d72",
        name: "mobile4Fiser",
        iconUrl: "https://www.dropbox.com/s/8e5yspfk2hibi9f/FIS-INSIGHT-002.png?dl=1"
      }
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => {
            return <Home />
          }} />
          <Route path="/eLearning" render={() => {
            return <AppDetail application={appId.eLearning} />
          }} />
          <Route path="/mobile4Fiser" render={() => {
            return <AppDetail application={appId.mobile4Fiser} />
          }} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default RouteClient