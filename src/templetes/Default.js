import Header from '../components/Header'
import Footer from '../components/footer'

const Default = ({children})=>{
  return(
    <>
      <Header />
      {children}
      <Footer/>
    </>
  )
}

export default Default