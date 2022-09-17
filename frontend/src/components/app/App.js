import { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from '../header/HeaderMenu';
import Footer from '../footer/Footer';
import Modal from '../modal/Modal';
import AppRouter from './AppRouter';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { chek } from '../../http/userAPI';



const App = observer(() => {

  const {user} = useContext(Context)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
      chek().then(data => {
       if(data) {
        user.setIsAuth(true)
        user.setUser(user)
       }
      })
  }, [])
 
  const onShowModal = (value) => {
      setShowModal(value)
  }

  return (
    <>
      <Router>
        <header className="header">
          <Header
            onShowModal = {onShowModal}
          />
        </header>
        <main>
          <AppRouter/>
        </main>
        <footer>
          <Footer/>
        </footer>
        {showModal ? <Modal onShowModal = {onShowModal}/> : null}
      </Router>
    </>
    
  )
})

export default App;


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