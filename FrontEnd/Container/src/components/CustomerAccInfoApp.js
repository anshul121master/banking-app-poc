import React, {useRef, useEffect} from 'react';
import { mount } from 'customerAccInfo/CustomerAccInfoApp';

export default function CustomerAccInfoApp({transactionDetails, customerInfo}) {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current, {
            transactionDetails,
            customerInfo
        })
    },[])
    return (
        <div ref={ref}></div>
    )
}