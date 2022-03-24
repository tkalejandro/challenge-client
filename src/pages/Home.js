import React, {useState} from "react";
import Button from "../components/Button/Button";
import LoginForm from "../components/LoginForm/LoginForm";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
const Home = () => {
    const navigate = useNavigate();
    const [loginMode, setLoginMode] = useState(false)
    const toggleLogin = () => setLoginMode(!loginMode)

    //? Lets try our redux :-)
    //const {currentUser} = useSelector(state => state.user)
    //console.log(currentUser)
    //? All good!

    return (
        <section style={{textAlign: "center"}}>
            <h1>myAuthApp</h1>
            {
                loginMode
                ? <LoginForm toggle={toggleLogin} />
                : <div>
                    <p>Hello Stranger, login to unleash my secrets! </p>
                    <div>
                        <Button text="Login" type="primary" onClick={toggleLogin}/>
                        <Button text="Register" onClick={() => navigate("/register")}/>
                    </div>
                </div>
            }
        </section>
    )

}

export default Home