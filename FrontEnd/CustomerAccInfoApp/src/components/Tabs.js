import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import UserProfile from "../components/UserProfile";
import AccountInfo from "../components/AccountInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CustomerAccInfoTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [accounts, setAccounts] = useState(null);

    const { customerInfo, transactionDetails } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const query = `query {
    getAccounts(customerId: ${customerInfo.customerId}) {
      customerId
      accountNumber
      accountType
      ifscCode
      branchName
      balance
    }
  }`;

  useEffect(() => {
    //fetch customer data and transactions data
    fetch("http://localhost:3000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((res) => setAccounts(res.data));
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          <Tab label="Profile" id="profiletab" />
          <Tab label="Account Information" id="accountinfotab" />
        </Tabs>
      </AppBar>
     {value === 0 ? <UserProfile customerInfo={customerInfo} /> : <AccountInfo accounts={accounts} transactionDetails={transactionDetails} />}
    </div>
  );
}
