import React, { useEffect } from 'react';
import ApiService from './ApiService';
import './App.css';
import './App.scss';

export default function App() {
  useEffect(() => {
    const apiClient = new ApiService();

    apiClient.getTrack().then((json) => {
      console.log(json);
    })
  })


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}