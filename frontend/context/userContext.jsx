import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export default  function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            axios.get("/profile")
                .then(({ data }) => {
                    setUser(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}