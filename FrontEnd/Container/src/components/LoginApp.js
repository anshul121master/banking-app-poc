import React, {useRef, useEffect} from 'react';
import { mount } from 'login/LoginApp';

export default function LoginApp({ onLoginSuccess }) {
    console.log("login called")
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current, onLoginSuccess)
    },[])
    return (
        <div ref={ref}></div>
    )
}