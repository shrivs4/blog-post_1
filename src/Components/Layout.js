import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import {Outlet} from 'react-router-dom';
import '../index.css';

const Layout = ({title,search,setSearch}) => {
  return (
    <div className='App'>
      <Header title = {title}/>
      <Nav 
      search={search}
      setSearch = {setSearch}
      />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
