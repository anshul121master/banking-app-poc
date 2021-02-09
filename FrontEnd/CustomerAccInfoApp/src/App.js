import React from "react"
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Tabs from './components/Tabs'

const generateClassName = createGenerateClassName({
    productionPrefix: 'cainfo'
})

export default function App(props){
    const { customerInfo, transactionDetails } = props;
    return (
        <StylesProvider generateClassName={generateClassName}>
        <Tabs customerInfo={customerInfo} transactionDetails={transactionDetails} />
        </StylesProvider>
    )
}