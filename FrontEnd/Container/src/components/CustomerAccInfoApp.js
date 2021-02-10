import React, {useRef, useEffect} from 'react';
import { mount } from 'customerAccInfo/CustomerAccInfoApp';

export default function CustomerAccInfoApp({transactionDetails, customerInfo}) {
    const ref = useRef(null);
    useEffect(() => {
        console.log("mount of customerInfo inside container")
        console.log("mount of customerInfo", mount)
        mount(ref.current, {
            transactionDetails,
            customerInfo
        })
    },[])
    return (
        <div id="customerInfo" ref={ref}></div>
    )
}