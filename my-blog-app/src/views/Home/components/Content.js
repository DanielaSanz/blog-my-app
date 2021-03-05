import React from 'react';
import { Box, Grid } from '@material-ui/core';

const GridContainer = () => {
    return(
        <div>
            <Grid container>
                <Grid item xs={6}>
                    <Box border={2}>
                        hola
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box border={2}>
                        hola
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default GridContainer;