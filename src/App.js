import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class app extends Component{
    pageSize= 15
  
  
  state = {
    progress: 5
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <div>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={2}
        progress={this.state.progress}
      />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress}  pageSize={this.pageSize} country="in"category="general"  /></Route> 
          <Route exact path="/business"><News setProgress={this.setProgress}    pageSize={this.pageSize} country="in"category="business" /></Route> 
          <Route exact path="/entertainment"><News setProgress={this.setProgress}   pageSize={this.pageSize} country="in"category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={this.setProgress}    pageSize={this.pageSize} country="in"category="general"/></Route> 
          <Route exact path="/health"><News setProgress={this.setProgress}   pageSize={this.pageSize} country="in"category="health"/></Route> 
          <Route exact path="/science"><News setProgress={this.setProgress}     pageSize={this.pageSize} country="in"category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={this.setProgress}    pageSize={this.pageSize} country="in"category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={this.setProgress}    pageSize={this.pageSize} country="in"category="technology"/></Route> 
          <Route exact path="/usa"><News setProgress={this.setProgress}    pageSize={this.pageSize} country="us" category="general"/></Route> 
          <Route exact path="/ar"><News setProgress={this.setProgress}    pageSize={this.pageSize} country="ar" category="general"/></Route> 
          <Route exact path="/at"><News setProgress={this.setProgress}    pageSize={this.pageSize} country="at" category="general"/></Route> 
          <Route exact path="/au"><News setProgress={this.setProgress}    pageSize={this.pageSize} country="au" category="general"/></Route> 



        </Switch>
        </Router>
      </div>
      </>
    )
  }
}
