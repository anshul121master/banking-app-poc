import React, { useState, lazy, Suspense} from "react";
//import TransactionApp from "./components/TransactionApp";
//import LoginApp from "./components/LoginApp";
//import CustomerAccInfoApp from "./components/CustomerAccInfoApp";
import {  Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

const LoginAppLazy = lazy(() => import("./components/LoginApp"));
const CustomerAccInfoAppLazy = lazy(() => import("./components/CustomerAccInfoApp"))

 function App(props) {
  //const history = useHistory();
  const [accountNumber, setAccountNumber] = useState(null);
  const transactionDetails = (accountNumber) => {
    setAccountNumber(accountNumber);
  };
  const [customerInfo, setCustomerInfo] = useState(null);
  const onLoginSuccess = (customerDetails) => {
    setCustomerInfo(customerDetails);
   props.history.push("/home");
 // console.log("props", props)
  };

  const Home = () => {
      console.log("home called")
    return (
      <React.Fragment>
        <CustomerAccInfoAppLazy
          transactionDetails={transactionDetails}
          customerInfo={customerInfo}
        />
        { /*accountNumber !== null ? (
          <TransactionApp accountNumber={accountNumber} />
        ) : (
          <div>Please click on any account to view transaction details</div>
        )*/}
      </React.Fragment>
    );
  };
  return (
    <div>
     {console.log("customerInfo inside render ",customerInfo)}
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <LoginAppLazy onLoginSuccess={onLoginSuccess} />}
          />
          <Route exact path="/home" component={Home} />
        </Switch>
        </Suspense>
    

    </div>
  );
}

export default withRouter(App);
