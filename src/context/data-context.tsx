import { ReactNode,createContext, useState } from "react";


interface contextProvider {
    children:ReactNode
}

export const UserContext = createContext<any>(null)

export const UserProvider = ({children}: contextProvider ) =>{

    const [search,setSearch] = useState<string>("")

    return <UserContext.Provider value={[search,setSearch]} >
        {children}
    </UserContext.Provider>

}