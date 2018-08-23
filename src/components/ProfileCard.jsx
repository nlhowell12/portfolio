import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 400,
    height: '100%'
  },
  media: {
    height: 200,
    paddingTop: '56.5%',
    backgroundPosition: 'top'
  },
};

function ProfileCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require("./images/profilePic.jpg")}
          title="Nick Howell"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Nick Howell
          </Typography>
          <Typography component="p">
            Junior Software Developer/Coach - Kenzie Academy
          </Typography>
          <ul>
            <li>
              <strong>Email:</strong> <a href="mailto:nlhowell12@gmail.com" target="_blank" rel="noopener noreferrer">nlhowell12@gmail.com</a>
            </li>
            <li><strong>Location:</strong> Indianapolis, IN</li>
          </ul>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="https://github.com/nlhowell12?tab=repositories" target="_blank">
            Github
          </Button>
          <Button size="small" color="primary" href="https://www.linkedin.com/in/nick-howell/" target="_blank">
            LinkedIn
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);
