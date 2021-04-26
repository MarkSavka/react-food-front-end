import React, { useEffect, useState } from 'react'
import './Api.css'

// Pages
import Home from './components/Pages/Home/index'
import Discount from './components/Pages/Discount'
import Dashboard from './components/Pages/Dashboard'
import Message from './components/Pages/Message'
import Notification from './components/Pages/Notification'
import NotFound from './components/Pages/NotFound'
import Setting from './components/Pages/Setting'


// SVG
import SVG_home from './assets/svg/SVG_home'
import SVG_discount from './assets/svg/SVG_discount'
import SVG_dashboard from './assets/svg/SVG_dashboard'
import SVG_message from './assets/svg/SVG_message'
import SVG_notification from './assets/svg/SGV_notification'
import SVG_setting from './assets/svg/SVG_setting'
import SVG_logo from './assets/svg/SVG_logo'
import SVG_signOut from './assets/svg/SVG_signOut'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const Api = () => {
    
    const [width, setWidth] = useState(19)
    const [height, setHeight] = useState(19)
    const [colorSVG, setColorSVG] = useState(('#EA7C68'))
    
    useEffect( () => {
        setWidth(20);
        setHeight(20);
        setColorSVG('#EA7C69')
    })
    
    return (
       <Router>
           <div className="wrapper" >
               <nav className="sidebar-router" >
                   <ul className="sidebar-router-logo">
                       <li>
                           <Link to="/">
                               <SVG_logo fill={colorSVG} width={width + 10} height={height + 10} />
                           </Link>
                       </li>
                   </ul>
                   <ul className="sidebar-router-nav" >
                       <li>
                           <Link to="/">
                               <SVG_home fill={colorSVG} width={width} height={height} />
                           </Link>
                       </li>
                       <li>
                           <Link to="/discount">
                               <SVG_discount fill={colorSVG} width={width} height={height} />
                           </Link>
                       </li>
                       <li>
                           <Link to="/dashboard">
                               <SVG_dashboard fill={colorSVG} width={width} height={height} />
                           </Link>
                       </li>
                       <li>
                           <Link to="/message">
                               <SVG_message fill={colorSVG} width={width} height={height} />
                           </Link>
                       </li>
                       <li>
                           <Link to="/notification" >
                               <SVG_notification fill={colorSVG} width={width} height={height} />
                           </Link>
                       </li>
                       <li>
                           <Link to="/setting" >
                               <SVG_setting fill={colorSVG} width={width} height={height} />
                           </Link>
                       </li>
                   </ul>
                   <ul className="sidebar-router-sign-out" >
                       <li>
                           <SVG_signOut fill={colorSVG} width={width} height={height} />
                       </li>
                   </ul>
               </nav>
               <Switch>
                   <Route exact path="/">
                       <Home />
                   </Route>
                   <Route path="/discount">
                       <Discount />
                   </Route>
                   <Route path="/dashboard">
                       <Dashboard />
                   </Route>
                   <Route path="/message">
                       <Message />
                   </Route>
                   <Route path="/notification">
                       <Notification />
                   </Route>
                   <Route path="/setting">
                       <Setting />
                   </Route>
        
        
        
        
        
                   <Route path="*">
                       <NotFound />
                   </Route>
               </Switch>
           </div>
           
       </Router>
    )
}

export default Api