import React, { useState } from "react";
import TransactionApp from "./components/TransactionApp";
import CustomerAccInfoApp from "./components/CustomerAccInfoApp";
import LoginApp from "./components/LoginApp";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
//import { withRouter } from "react-router";

export default function App(props) {
  const history = useHistory();
  const [accountNumber, setAccountNumber] = useState(null);
  const transactionDetails = (accountNumber) => {
    setAccountNumber(accountNumber);
  };
  const [customerInfo, setCustomerInfo] = useState(null);
  const onLoginSuccess = (customerDetails) => {
    setCustomerInfo(customerDetails);
  //  history.push("/home");
  };

  const Home = () => {
    return (
      <React.Fragment>
        <CustomerAccInfoApp
          transactionDetails={transactionDetails}
          customerInfo={customerInfo}
        />
        {accountNumber !== null ? (
          <TransactionApp accountNumber={accountNumber} />
        ) : (
          <div>Please click on any account to view transaction details</div>
        )}
      </React.Fragment>
    );
  };
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <LoginApp onLoginSuccess={onLoginSuccess} />}
          />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

//export default withRouter(App);
