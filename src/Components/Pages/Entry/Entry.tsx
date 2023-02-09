import { useState } from "react";
import MainButton from "../../Shared/MainButton/MainButton";
import EntryStyled from "./Entry.styled";
import EntryHandler from "./EntryHandler/EntryHandler";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Entry = () => {
    const [loginUp, setLoginUp] = useState<boolean>(false);
    const [signinUp, setSignUp] = useState<boolean>(false);

    const signClick = () => {
        return setSignUp(!signinUp)
    }

    const loginClick = () => {
        return setLoginUp(!loginUp)
    }

    return <EntryStyled>

        <h1> teste </h1>
        {/* LOGO ou TEXTO AQUI */}
        <EntryHandler>
            <MainButton type={"primary"} onClick={signClick}>Sign In</MainButton>
            <MainButton type={"secondary"} onClick={loginClick}>Login</MainButton>
        </EntryHandler>
        {loginUp && <Login handler={{setLoginUp, loginUp}} />}
        {signinUp && <Signup handler={{setSignUp, signinUp}}/>}
    </EntryStyled>
};

export default Entry;