import React, { useState, useEffect, useContext } from 'react';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import CardActions from '@material-ui/core/CardActions';
// import { Grid, Paper } from '@material-ui/core';
import { Container, Button } from 'react-bootstrap';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: 'left',
  },
  linkStyle: {
    textDecoration: 'none',
    padding: 10,
  },
  buttonStyle: {
    margin: 5,
  },
  textDescripton: {
    margin: 10,
  },
  showMoreStyle: {
    margin: 20,
  },
};
// const PaperComponent = () => (
//   <Paper
//     style={{
//       backgroundColor: 'white',
//       color: 'black',
//       width: '500px',
//       height: '300px',
//     }}
//   >
//     <div style={{}}>
//       <h2>Backend Development</h2>
//       <Card
//         style={{
//           width: 400,
//           backgroundColor: 'yellow',
//         }}
//       >
//         <CardContent>
//           <Typography
//             style={{ fontSize: 14 }}
//             color="textSecondary"
//             gutterBottom
//           >
//             Greetings of the day
//           </Typography>
//           <Typography variant="h5" component="h2">
//             How are you ?
//           </Typography>
//           <Typography
//             style={{
//               marginBottom: 12,
//             }}
//             color="textSecondary"
//           >
//             Keep Motivated
//           </Typography>
//           <Typography variant="body2" component="p">
//             Stay Happy
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Stay Safe.....</Button>
//         </CardActions>
//       </Card>
//     </div>
//   </Paper>
// );
// const PaperComponent1 = () => (
//   <Paper
//     style={{
//       backgroundColor: 'white',
//       color: 'black',
//       width: '500px',
//       height: '500px',
//     }}
//   >
//     <div style={{}}>
//       <h2>Frontend Development</h2>
//       <Card
//         style={{
//           width: 500,
//           backgroundColor: 'white',
//           height: 500,
//         }}
//       >
//         <CardContent>
//           <Typography
//             style={{ fontSize: 14 }}
//             color="textSecondary"
//             gutterBottom
//           >
//             Greetings of the day
//           </Typography>
//           <Typography variant="h5" component="h2">
//             How are you ?
//           </Typography>
//           <Typography
//             style={{
//               marginBottom: 12,
//             }}
//             color="textSecondary"
//           >
//             Keep Motivated
//           </Typography>
//           <Typography variant="body2" component="p">
//             Stay Happy
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Stay Safe.....</Button>
//         </CardActions>
//       </Card>
//     </div>
//   </Paper>
// );
function Home() {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div style={styles.mainContainer}>
        {/* <h1 style={styles.nameStyle}>{data?.name}</h1> */}
        <Container>
          <div style={{ flexDirection: 'row' }}>
            <h2>{data?.discription}</h2>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: data?.roles,
              }}
            />
          </div>
          <Button
            style={styles.showMoreStyle}
            variant={theme.bsSecondaryVariant}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
            }}
          >
            Download Resume
          </Button>
          <Social />
        </Container>
        {/* <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button> */}
        {/* <div className="App">
          <Grid container>
            <Grid item xs={6}>
              <PaperComponent1 />
            </Grid>
            <Grid item xs={5}>
              <PaperComponent />
            </Grid>
          </Grid>
        </div> */}
      </div>
    </Fade>
  ) : <FallbackSpinner />;
}
export default Home;
