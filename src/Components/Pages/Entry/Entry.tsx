import { useState } from "react";
import MainButton from "../../Shared/MainButton/MainButton";
import EntryStyled from "./Entry.styled";
import EntryHandler from "./EntryHandler/EntryHandler";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Entry = () => {
    const [loginUp, setLoginUp] = useState<boolean>(false);
    const [signinUp, setSignUp] = useState<boolean>(false);

    return <EntryStyled>
        {/* LOGO ou TEXTO AQUI */}
        <EntryHandler>
            <MainButton type={'secondary'} onClick={()=> setSignUp(true)}>Sign In</MainButton>
            <MainButton type={'secondary'} onClick={() => console.log(true)}>Login</MainButton>
        </EntryHandler>
        {loginUp && <Login handler={ setLoginUp } />}
        {signinUp && <Signup handler={ setSignUp }/>}
    </EntryStyled>
};

export default Entry;