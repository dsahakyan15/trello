import { onAuthStateChanged, signOut, User } from "firebase/auth"
import { useEffect, useState } from "react"
import useUser from "./providers/UserProvider/useUser"
import { auth } from "shared/api/firebase"

import './styles/index.css'

import Desktop from "pages/Desktop"
import SignUp from "pages/SignUp"

const App = () => {
  const {user,outUser} = useUser();
  console.log(user);
  
  //TODO sttex userSecondi tex@ grac er user vonc @nde bayc qani vor 2 hata user@ error er tali 
  const [userSecond, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser)
      setUser(currentUser)
    })

    return unsubscribe
  }, [])

  const handleSignOut = () => {
    signOut(auth).catch(err => console.log(err))
  }

  return (
    <div>
      {
        userSecond ?
          <Desktop handleSignOut={handleSignOut} />
          :
          <SignUp />
      }


    </div>
  )
}
export default App