import React, { useEffect } from "react";
import _randomNumber from "../helpers/_randomNumber";
import Button from "../components/Button/Button";
import { useSelector, useDispatch} from "react-redux";
import { useParams } from 'react-router-dom';
import * as userAction from "../redux/actions/userAction"

const UserDashboard = () => {

    const secrets = ["Be kind to others", "Be the best version of your self", "Live  your life happily", "Enjoy time with your family."]
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(userAction.loadProfile(id))
    }, [])

    const {currentUser, anArray} = useSelector(state => state.user)
    
    console.log("current user", currentUser)
    
    return (
        <div style={{padding: "0 10%"}}>
            <section>
                <h1>Hello!  {currentUser.fullName}</h1>
                <p>This is your email: {currentUser.email}</p>
                <p>The secret of today is: {secrets[_randomNumber(secrets)]}</p>
                <h2>Lets print the array</h2>
                <ul>
                {
                    anArray.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                           
                        )
                    })
                }
                </ul>
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