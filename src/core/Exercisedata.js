import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Footer from './Footer'
import Menu from "./Menu";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
var about = [
    {
        title:'Squats',
        body:'Squats strengthen your lower body and core muscles, Squats burn calories and may help you lose weight, Squats can reduce your risk of injury.',
       imageId: 0
    },
    {
        title:'High knees',
        body: 'It engages your core, strengthens all the muscles in your legs,Increases heart rate and improves coordination,An easy escape if you donot like running for hours on end!',
        imageId: 1
    },
    {
        title:'Shoulder Press',
        body: 'Shoulder press strengthens shoulder muscles.It also targets triceps and trapezius muscles.Core muscles are also engaged.',
        imageId: 2
    },
    {
        title:'Control your portion sizes.',
        body: 'Lateral raises specifically targets deltoid muscles.the lateral raise can help you achieve muscle hypertrophy of deltoids.It gives the appearance of broader, stronger shoulders.',
        imageId: 3
    },
]
const styles = theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
    },
    cardGrid: {
      padding: `${theme.spacing.unit * 3}px 0`,
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
      
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    justify:{
      justifyContent: 'center'
    }
  });
  
  export class About extends React.Component {
    state = {
      cards : null
    }
    componentDidMount(){
      this.setState({cards: about})
    }
    render()
    {
      const { classes } = this.props;
  
      return (
      <React.Fragment>
     {/*  <Menu/> */}
        {/* <CssBaseline /> */}
        {this.state.cards &&
          <div>
            <main>
              <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container spacing={40} className={classes.justify}>
                  {this.state.cards.map((card, index) => (
                    <Grid item key={index} sm={6} md={4} lg={3}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={require('../assets/images/advices/about'+card.imageId+'.jpg')}
                          title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="headline" component="h2">
                            {card.title}
                          </Typography>
                          <Typography variant="subheading">
                            {card.body}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </main>
            {/* Footer */}
            {/* <Footer/> */}
          </div>
        }
        </React.Fragment>
      );
    }
  }
  
  Advice.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(About);