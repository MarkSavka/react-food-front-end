import React, { useEffect, useState } from 'react'
import './Api.sass'

// Pages
import Home from './Pages/Home/index'
import Discount from './Pages/Discount'
import Dashboard from './Pages/Dashboard'
import Message from './Pages/Message'
import Notification from './Pages/Notification'
import NotFound from './Pages/NotFound'
import Setting from './Pages/Setting'

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
   Link,
} from 'react-router-dom'

const Api = () => {

   const [width, setWidth] = useState(19)
   const [height, setHeight] = useState(19)
   const [colorSVG, setColorSVG] = useState(('#EA7C68'))
   const [activeColorSVG, setActiveColorSVG] = useState('white')
   const [active, setActive] = useState({
      'home': false,
      'discount': false,
      'dashboard': false,
      'message': false,
      'notification': false,
      'setting': false
   })

   useEffect(() => {
      setWidth(20)
      setHeight(20)
      setColorSVG('#EA7C69')
      setActiveColorSVG('white')
   }, [])

   useEffect(() => {
      handleLocationActiveLink(window.location.pathname.split('/')[1])
   }, [window.location.pathname])

   const handleLocationActiveLink = (pathname) => {
      switch (pathname) {
         case 'discount':      setActiveLink('discount'); break;
         case 'dashboard':     setActiveLink('dashboard'); break;
         case 'message':       setActiveLink('message'); break;
         case 'notification':  setActiveLink('notification'); break;
         case 'setting':       setActiveLink('setting'); break;
         default:              setActiveLink('home'); break;
      }
   }

   const setActiveLink = (newActiveLink) => {
      let tempObj = {
         'home': false,
         'discount': false,
         'dashboard': false,
         'message': false,
         'notification': false,
         'setting': false
      }
      tempObj[newActiveLink] = true;
      setActive(tempObj)
   }

   const activeColor = (activeLink) => {
      return activeLink ? activeColorSVG : colorSVG
   }

   return (
      <Router>
         <div className="wrapper">
            <nav className="sidebar-router">
               <ul className="sidebar-router-logo">
                  <li>
                     <Link to="/">
                        <SVG_logo fill={colorSVG} width={width + 10} height={height + 10} />
                     </Link>
                  </li>
               </ul>

               <ul className="sidebar-router-nav">
                  <li data-active={active.home} onClick={() => setActiveLink('home')}>
                     <Link to="/">
                        <SVG_home fill={activeColor(active.home)} width={width} height={height} />
                     </Link>
                  </li>
                  <li data-active={active.discount} onClick={() => setActiveLink('discount')}>
                     <Link to="/discount">
                        <SVG_discount fill={activeColor(active.discount)} width={width} height={height} />
                     </Link>
                  </li>
                  <li data-active={active.dashboard} onClick={() => setActiveLink('dashboard')}>
                     <Link to="/dashboard">
                        <SVG_dashboard fill={activeColor(active.dashboard)} width={width} height={height} />
                     </Link>
                  </li>
                  <li data-active={active.message} onClick={() => setActiveLink('message')}>
                     <Link to="/message">
                        <SVG_message fill={activeColor(active.message)} width={width} height={height} />
                     </Link>
                  </li>
                  <li data-active={active.notification} onClick={() => setActiveLink('notification')}>
                     <Link to="/notification">
                        <SVG_notification fill={activeColor(active.notification)} width={width} height={height} />
                     </Link>
                  </li>
                  <li data-active={active.setting} onClick={() => setActiveLink('setting')}>
                     <Link to="/setting">
                        <SVG_setting fill={activeColor(active.setting)} width={width} height={height} />
                     </Link>
                  </li>
               </ul>

               <ul className="sidebar-router-sign-out">
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