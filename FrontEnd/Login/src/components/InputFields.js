import React from 'react';
import TextField from '@material-ui/core/TextField';

export default (props) => {
    const { value, onChange, ...rest } = props;
    const fieldName = Object.keys(rest);
    return (
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id={fieldName[0]}
        label={fieldName[0] === "email" ? "Email Address" : "Password"}
        name={fieldName[0]}
        type={fieldName[0]}
        value={value}
        autoComplete={fieldName[0]}
        autoFocus={fieldName[0] === "email" ? true : false}
        onChange={onChange}
      />
    )
}