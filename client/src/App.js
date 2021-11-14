import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import  { useDispatch } from 'react-redux';

import { getResis } from './actions/resis';
import Resis from './components/Resis/Resis';
import Form from './components/Form/Form';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResis());
    }, [dispatch]);

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Resi Scanner</Typography>
                <img className={classes.logo} src="https://images.vexels.com/media/users/3/157861/isolated/preview/201f1712c6605ad8a87821237a4e72b4-barcode-scanner-icon-by-vexels.png" alt="resi-scanner" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Resis />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;