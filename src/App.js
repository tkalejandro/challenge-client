
import React from 'react';
import LayOut from './layout/Layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import NotFound from "./pages/NotFound"

import { Provider } from "react-redux";
import store from "./redux/store"


const App = () => {
  return (

    <Provider store={store}>
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
    </Provider>



  )
}

export default App;
