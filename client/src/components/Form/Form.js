import React from 'react';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles();
    return (
        <form className={classes.form}>
            <h1>Form</h1>
        </form>
    );
}

export default Form;