import { Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import Resi from './Resi/Resi';

import useStyles from './styles';

const Resis = () => {
    const resis = useSelector((state) => state.resis);
    const classes = useStyles();

    console.log(resis);

    return (
        <Container className={classes.mainContainer}>
            <h1 className={classes.smMargin}>Resis</h1>
            <Resi />
            <Resi />
        </Container>
    );
}

export default Resis;