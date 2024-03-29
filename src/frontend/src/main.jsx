import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header.jsx'
import SampleText from './components/Text/sampleText.jsx'
import Menu from './components/Menu/Menu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header image={true}/>
    <SampleText
      title="aprenda, desenvolva, conquiste!"
      text="com o learn free, você encontrará os melhores conteúdos gratuitos na área da educação, contribuindo para que você aprenda com rapidez, qualidade e sem pagar nada!"
    />
  </React.StrictMode>,
)
