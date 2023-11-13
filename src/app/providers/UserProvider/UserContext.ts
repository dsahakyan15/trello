import { createContext } from "react";
import { User } from "firebase/auth";


//TODO stex petqa lini sovorakan email,username autnetifikaciai hamar interface 
export interface UserContextProps {
    user?:User | null;
    setUser?:(user:User) => void
}

export const UserContext = createContext<UserContextProps>({})

export const LOCAL_STORAGE_USER_KEY = 'user'