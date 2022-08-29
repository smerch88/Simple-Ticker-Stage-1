import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ApiService from '../../services/ApiService';
import Header from '../header/HeaderMenu';
import Promo from '../promo/Promo';
import AboutProduct from '../aboutProduct/AboutProduct';
import CatalogList from '../catalogList/CatalogList';
import FeedBack from '../feedback/FeedBack';
import News from '../news/News';
import Footer from '../footer/Footer';
import Login from '../login/Log';
import Register from '../regin/registr';

export default function App() {

  return (
    <>

      <Router>
      
        <header>
          <Header/>
          
        </header>
      
      {/* <main>
        <AboutProduct/>
        <CatalogList/>
        <FeedBack/>
        <News/>
      </main>
      <footer>
        <Footer/>
      </footer> */}
      <Routes>
        <Route path='/' element={<Promo/>}/>
        <Route path='/reg' element={<Register/>}/>
      </Routes>

      </Router>
      
    </>
    
  )
}


// export default function App() {
//   useEffect(() => {
//     const apiClient = new ApiService();

//     apiClient.getTrack().then((json) => {
//       console.log(json);
//     })
//   })


//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>

//         <hr />

//         {/*
//       A <Switch> looks through all its children <Route>
//       elements and renders the first one whose path
//       matches the current URL. Use a <Switch> any time
//       you have multiple routes, but you want only one
//       of them to render at a time
//     */}
//         <Routes>
//           <Route exact path="/" element={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/dashboard" element={<Dashboard/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }







// import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom'
// import { Route, Link, Routes } from 'react-router-dom'

// import  CustomersList from '../Customer/CustomerList'
// import  CustomerCreateUpdate  from '../Customer/CustomerCreateUpdate'
// import './App.css';

// const BaseLayout = () => (
//   <div className="container-fluid">
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Django React Demo</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//       <a className="nav-item nav-link" href="/">CUSTOMERS</a>
//       <a className="nav-item nav-link" href="/customer">CREATE CUSTOMER</a>

//     </div>
//   </div>
// </nav>  

//     <div className="content">
//       <Routes>
//         <Route path="/" exact element={<CustomersList/>} />
//         <Route path="/customer/:pk"  element={<CustomerCreateUpdate/>} />
//         <Route path="/customer/" exact element={<CustomerCreateUpdate/>} />
//       </Routes>
//     </div>

//   </div>
// )

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <BaseLayout/>
//       </BrowserRouter>
//     );
//   }
// }



// export default App;