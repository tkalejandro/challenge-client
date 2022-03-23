import React, {useState} from "react";
import Button from "../components/Button/Button";
import LoginForm from "../components/LoginForm/LoginForm";


const Home = () => {
    const [loginMode, setLoginMode] = useState(false)
    const toggleLogin = () => setLoginMode(!loginMode)
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
                        <Button text="Register"/>
                    </div>
                </div>
            }
        </section>
    )

}

export default Home