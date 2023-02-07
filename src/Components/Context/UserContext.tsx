import { createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { User } from "../../Utils/Types/User";

const UserContext = createContext({});

export const UserProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
    const [user, setUser] = useState<User>();

    return (
        <UserContext.Provider value={{}}>
            {props.children}
        </UserContext.Provider>
    );
};