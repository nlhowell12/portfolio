import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Biography(props) {
  const { classes } = props;

  return (
      <Paper className={classes.root} elevation={1} style={{minWidth: '30%'}}>
        <Typography variant="headline" component="h3">
          Biography
        </Typography>
        <Typography component="p" >
        At one point I was positive that I wanted to fly planes for a living, but I was young and life has a way of changing your mind.
        <br/>
        <br/>
        It's taken me longer than I'd like to find something that I love enough to make into a career, but I've found that in my time at Kenzie.  I've been in plenty of jobs where I went to work to pay the bills but now that I've gotten into web development I'm actually excited to take on new projects and learn about new opportunities.
        <br/>
        <br/>
        </Typography>
        <Typography variant="headline" component="h3">
          Skills
        </Typography>
        <Typography component="div" style={{display: 'flex', justifyContent:'space-around'}}>
        <ul>
          <li>React</li>
          <li>Mongo</li>
          <li>SQL</li>
          <li>Javascript</li>
        </ul>
        <ul>
        <li style={{color: 'red'}}><i style={{ color: 'green', fontSize: "20pt" }}>U</i>X<strong style={{color: 'purple', textDecoration: 'underline'}}>/U</strong>I</li>
          <li>Six Sigma/Lean</li>
          <li>Agile Methodology</li>
          <li>Coaching</li>
          
        </ul>
        </Typography>
        <Typography variant="headline" component="h3">
          Interests
        </Typography>
        <Typography component="p" >
        <br/>
        <strong>Fencing</strong> - I was a member of the Purdue Fencing team during college and, while I haven't kept up with it, it's still something I enjoy.
        <br/>
        <br/>
        <strong>Gaming</strong> - My wife and I are avid gamers in our spare time.
        <br/>
        <br/>
        <strong>Aviation</strong> - I have my Commercial Instrument Multi-Engine Land license with 200+ hours of flight time, although sadly I'm not current.
        </Typography>
      </Paper>
  );
}

Biography.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Biography);