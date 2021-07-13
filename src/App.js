import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Appointment from './components/Appointment/Appointment';
import Glimpse from './components/Glimpse/Glimpse';
import Description from './components/Description/Description';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Appointment />
      <Glimpse />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
