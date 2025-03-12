import { database } from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

import Header from './components/Header'
import Hero from './components/Hero'


const App = () => {
  const collectionRef = collection(database, 'waitlist')

  const joinWaitlist = async (email) => {
    try {
      await addDoc(collectionRef, {
        email,
      })
      console.log(`${email} added to Clearledgr waitlist`)
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className="container">
      <Header />
      <Hero joinWaitlist={joinWaitlist} />
    </div>
  )
}

export default App