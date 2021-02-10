import React, {useRef, useEffect} from 'react';
import { mount } from 'login/LoginApp';

export default function LoginApp({ onLoginSuccess }) {
    console.log("login called")
    const ref = useRef(null);
    useEffect(() => {
        console.log(mount)
        mount(ref.current, onLoginSuccess)
    },[])
    return (
        <div id="login" ref={ref}></div>
    )
}