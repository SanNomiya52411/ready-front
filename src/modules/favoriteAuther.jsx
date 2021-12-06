import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Footer from  './footer'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ExperimentBookInfo from './experimentBookInfo';

export default function FavoriteAuther() {

    const theme = createTheme({
        typography: {
          auther: {
            fontSize: 20,
            flex:1
          },
          info: {
            fontSize: 30,
          },
        },
      });

      const cards = [1, 2, 3, 4];

    return(
         <Grid>
             <Box mt={1} sx={{ p: 'auto', border: 1 }}>
                <Grid container spacing={4}  alignItems="center" justify="center">
                <Grid item xs={2} >
                  <ThemeProvider theme={theme}>
                     <Typography sx={{p:3.5}} auther variant="auther" component="div">
                        作者名
                     </Typography>
                    </ThemeProvider>
                    <Grid>
                     <CardActions>
                      <Button  sx={{pt:1,mt:5}} variant="contained">お気に入り解除</Button>
                     </CardActions>
                    </Grid>
                </Grid>
                <CssBaseline />
                <main>
                <Grid item xs={12} sm container>
                  <Grid item xs={3} sx={{p:1}} container direction="column" spacing={1}>
                    {cards.map((card) => (<FavoriteAuther/>))}
                  </Grid>
                </Grid>
                </main>
              </Grid>
             </Box>
             <Box mt={2} sx={{ p: 'auto', border: 1 }}>
             <Grid container spacing={4}  alignItems="center" justify="center">
                <Grid item xs={2} >
                  <ThemeProvider theme={theme}>
                     <Typography auther variant="auther" component="div">
                        作者名
                     </Typography>
                    </ThemeProvider>
                    <Grid>
                     <CardActions>
                      <Button  sx={{pt:1,mt:5}} variant="contained">お気に入り解除</Button>
                     </CardActions>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm container>
                <Grid item xs={3} sx={{p:1}} container direction="column" spacing={2}>
                    <ExperimentBookInfo></ExperimentBookInfo>
                  </Grid>
                </Grid>
              </Grid>
             </Box>
             <Footer></Footer>
         </Grid>
    )
}