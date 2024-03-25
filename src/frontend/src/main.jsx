import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Card from './components/OrgCard/Card.jsx'
import Header from './components/Header/Header.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>

    <Card name="Programadores do Amanhã" adress="" website="pda.org.br" description="Formando programadores para o amanhã" contact="(99) 99999-9999" />

  </React.StrictMode>,
)
