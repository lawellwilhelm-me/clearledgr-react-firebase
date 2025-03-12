import Header from './components/Header'
import Hero from './components/Hero'


const App = () => {

  const joinWaitlist = (email) => {
    console.log(`${email} added to waitlist`)
  }

  return (
    <div className="container">
      <Header />
      <Hero joinWaitlist={joinWaitlist} />
    </div>
  )
}

export default App