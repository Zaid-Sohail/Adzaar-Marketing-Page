import React from 'react'
import { useState } from 'react'
import './App.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/Portfoliopage'
import ProcessPage from './pages/ProcessPage'
import ServicesPage from './pages/ServicesPage'
import SocialMediaManagement from './pages/SocialMediaManagement'
import Paidadscampaigns from './pages/Paidadscampaigns'
import Contentcreation from './pages/Contentcreation'
import Brandstrategy from './pages/Brandstrategy'
import About from './pages/About'
import Careers from './pages/Careers'
import Casestudies from './pages/Casestudies'
import Blogs from './pages/Blogs'

export default function App() {
  const router = createBrowserRouter([
    {
      index:true,
      element:<Home/>
    },
    {
      path: "/contact",
      element:<ContactPage/>
    },
    {
      path:"/portfolio",
      element:<PortfolioPage/>
    },
    {
      path:"/process",
      element:<ProcessPage/>
    },
    {
      path:"/services",
      element:<ServicesPage/>
    },
    {
      path:"/socialmedia",
      element:<SocialMediaManagement/>
    },
    {
      path:"/paidads",
      element:<Paidadscampaigns/>
    },
    {
      path:"/contentcreation",
      element:<Contentcreation/>
    },
    {
      path:"/brandstrategy",
      element:<Brandstrategy/>
    },
    {
      path:"/Aboutus",
      element:<About/>
    },
    {
      path:"/career",
      element:<Careers/>
    },
    {
      path:"/casestudies",
      element:<Casestudies/>
    },
    {
      path:"/blog",
      element:<Blogs/>
    }
  ])

  


  return (
    <div>
      <RouterProvider router={router}/>

    </div>
  )
}

