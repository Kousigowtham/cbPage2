import { Container, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

const Page1 = () => {

    return (
        <div>
            <Container fixed>
                <Paper>
                <Grid direction="column">
                    <Grid container direction="row">
                        <Grid item xs={2}>
                            <Typography variant="h6">
                                Maths
                            </Typography>
                            <Typography variant="subtitle1">
                                Data Handling
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            Mathss
                        </Grid>
                        <Grid item xs={2}>
                            Mathss
                        </Grid>
                        <Grid item xs={2}>
                            Mathss
                        </Grid>
                        <Grid item xs={2} alignItems="flex-end">
                            End
                        </Grid>
                    </Grid>
                </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Page1
