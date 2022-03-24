import React from "react";
import _randomNumber from "../helpers/_randomNumber";
import Button from "../components/Button/Button";

const UserDashboard = () => {
    const secrets = ["Be kind to others", "Be the best version of your self", "Live  your life happily", "Enjoy time with your family."]
    return (
        <div style={{padding: "0 10%"}}>
            <section>
                <h1>Hello!  {"<fullName>"}</h1>
                <p>This is your email: {"<email>"}</p>
                <p>The secret of today is: {secrets[_randomNumber(secrets)]}</p>
            </section>
            <section>

                <div>
                    <Button text="LogOut" type="" />
                    <Button text="Delete"  type="error" />
                </div>
            </section>

        </div>






    )

}

export default UserDashboard