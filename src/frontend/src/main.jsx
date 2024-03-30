import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header.jsx'
import SampleText from './components/Text/SampleText.jsx'
import TextImage from "./components/TextImage/TextImage.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header image={true} />
    <br />
    <SampleText
      title="liberte seu potencial com o learn free: educação gratuita ao seu alcance"
      text="desbloqueie um mundo de oportunidades com o learn free, onde a educação de qualidade está ao seu alcance, sem nenhum custo. nossa api oferece uma ampla variedade de recursos educacionais gratuitos, permitindo que você aprenda, cresça e se desenvolva em seu próprio ritmo, sem barreiras financeiras. junte-se a nós e liberte todo o seu potencial!"
    />
    <br />
    <TextImage
      align="right"
      title="Explorando os Benefícios do Estudo"
      text="Estudar é uma das melhores formas de investir em si mesmo e abrir portas para um futuro promissor. Ao comprometer-se com o aprendizado contínuo, você dá um passo importante rumo ao sucesso pessoal e profissional."
      img="https://media.licdn.com/dms/image/C4E12AQF9ogk_kch-Mw/article-cover_image-shrink_720_1280/0/1556040638154?e=2147483647&v=beta&t=j-U6_eERPP_Mc6-yDM6dEtE1_gbZ66-oG8tTFJG2giM" />
  </React.StrictMode>,
)