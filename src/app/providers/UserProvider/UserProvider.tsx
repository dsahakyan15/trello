import { FC, ReactNode, useMemo, useState } from 'react'
import { User } from 'firebase/auth'
import { LOCAL_STORAGE_USER_KEY, UserContext } from './UserContext'


interface UserProviderProps {
    children: ReactNode
}

// TODO || '{}' bayc lav lucum chi eti dnel@ indz tvuma
const defaultUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY) || 'null') as User

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User>(defaultUser)


    /*
    
    եթե այսպես ես գրում useMemo(() => {}, []) պետք է return գրել
useMemo(() => {
 return {
 ...yourObject
}
})




    */

    const defaultProps = useMemo(() => ({
        user,
        setUser
    }), [user])

    return (
        <UserContext.Provider value={defaultProps}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider