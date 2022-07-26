import '../App.css';
import FeedBack from "./FeedBack";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CryptoTracker from './CryptoTracker';
import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyle } from "./Themes"
import HomePage from './HomePage';

const StyledApp =  styled.div`
color: ${props => props.theme.color}
`;

function App() {

  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme ===  "light" ? lightTheme : darkTheme }>
    <GlobalStyle />
    <StyledApp>
      <button onClick={() => changeTheme()}ToggleDarkLight>Theme</button>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact="true" path="/" element={<HomePage />}/>
        <Route exact="true" path="/cryptotracker" element={<CryptoTracker />}/>
        <Route path='/feedback' element={<FeedBack />}/>
      </Routes>
      </BrowserRouter>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
