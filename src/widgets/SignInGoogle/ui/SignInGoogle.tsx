import { FC } from 'react'
import { FaGoogle } from 'react-icons/fa6'
import styles from './SignInGoogle.module.css'
import { auth } from 'shared/api/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const SignInGoogle: FC = () => {

    const signIn = async () => {
        const provider = new GoogleAuthProvider()

        try {
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div onClick={signIn} className={styles.google}>
            <FaGoogle />
        </div>
    )
}
export default SignInGoogle