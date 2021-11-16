import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import Resi from './Resi/Resi';

import useStyles from './styles';

const Resis = () => {
    const resis = useSelector((state) => state.resis);
    const classes = useStyles();

    console.log(resis);

    return (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
                <Resi/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Resi/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Resi/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Resi/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Resi/>
            </Grid>
        </Grid>
    );
}

export default Resis;