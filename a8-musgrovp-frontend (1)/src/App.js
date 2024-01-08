
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import products from './data/products.js';

import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import LogPage from './pages/LogPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import TopicsPage from './pages/TopicsPage.js';

import './App.css';

function App() {

  const [calorie, setCalorieToEdit] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Peter Musgrove 
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Gallery" element={<GalleryPage />} /> 
                <Route path="/Staff" element={<StaffPage />} /> 
                <Route path="/Order" element={<OrderPage products={products} />} />
                <Route path="/Log" element={<LogPage setCalorie={setCalorieToEdit}/>} />
                <Route path="/Create" element={<CreatePage  />} />   
                <Route path="/Edit" element={<EditPage calorieToEdit={calorie} />} />   
                <Route path="/Topics" element={<TopicsPage />} />   
            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023 Peter Musgrove</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
