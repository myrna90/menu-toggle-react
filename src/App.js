import React from 'react';
import './App.css';
import Aside from './componentes/Aside';

function App() {
  
  return (
    <div className="conteiner">
     <Aside/>
      <div className="header">
                Header
            </div>
      <div className="section">
                Content
            </div>
            <div className="footer">
                footer
            </div> 
    </div>
  );
}

export default App;
