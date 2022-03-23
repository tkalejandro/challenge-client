import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';

const NotFound = () => {

    const [path, setPath] = useState("")
   
    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
      }
      useEffect( () => {
        setPath(usePathname)
      }, [path]) 
    return (
        <section>
            <h1>NotFound</h1>
            <p>You tried to visit:</p>
            <p>www.myauthapp.com{path}</p>
            <p>Sorry that doesn&apos;t exist.</p>
        </section>
    )

}

export default NotFound