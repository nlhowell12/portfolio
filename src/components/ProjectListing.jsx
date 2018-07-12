import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './projectTileData';
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    minWidth: '30%',
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

function ProjectListing(props) {
  const { classes } = props;

  return (
      <Paper style={{ overflowY: 'scroll', minWidth: '30%' }}>
        <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Featured Projects</ListSubheader>
            </GridListTile>
            {tileData.map(tile => (
            <GridListTile key={tile.img}>
                <img src={require(`${tile.img}`)} alt={tile.title} />
                <GridListTileBar
                title={tile.title}
                actionIcon={
                    <IconButton className={classes.icon} href={tile.link} target="_blank">
                    <InfoIcon />
                    </IconButton>
                }
                />
            </GridListTile>
            ))}
        </GridList>
        </div>
    </Paper>
  );
}

ProjectListing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectListing);
