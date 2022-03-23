
import React from 'react';
import LayOut from './layout/Layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import NotFound from "./pages/NotFound"


const App = () => {
  return (


    <Router>
      <LayOut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/user/:id" element={<UserDashboard />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </LayOut>
    </Router>



  )
}

export default App;
