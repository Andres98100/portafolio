import { SimpleFooter } from './components/Footer'
import SimpleHeader from './components/Header'
import { NavbarSimple } from './components/NavBar'
import CardProjects from './components/CardProjects'
import ContactSection from './components/ContactSection'


function App() {

  return (
    <>
      <NavbarSimple />
      <div className=' m-14'></div>
      <div className='m-10 bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
      <SimpleHeader />
      <CardProjects />
      <ContactSection />
      <SimpleFooter />
    </
    >
  )
}

export default App
