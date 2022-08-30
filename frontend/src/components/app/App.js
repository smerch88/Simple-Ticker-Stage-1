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
import Reg from '../reg/Reg';
import Login from '../login/Log';
import Register from '../regin/registr';
import Custom from '../custom/Custom';


export default function App() {

  return (
    <>
      <header>
        <Header/>
        {/* <Promo/> */}
      </header>
      <main>
        {/* <AboutProduct/>
        <CatalogList/>
        <FeedBack/>
        <News/> */}
        <Custom/>
      </main>
      <footer>
        <Footer/>
      </footer>
      {/* <Register/> */}
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