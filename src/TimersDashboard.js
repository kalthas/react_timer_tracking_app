import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import uuid from 'uuid';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 450,
    margin: '0 auto'
  }
});

class TimersDashboard extends React.Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chroes',
        id: uuid.v4(),
        elapsed: 5456099,
        runningSince: Date.now()
      },
      {
        title: 'Bake squash',
        project: 'Kitch Chores',
        id: uuid.v4(),
        elapsed:1273998,
        runningSince: null
      }
    ]
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <EditableTimerList
            timers={this.props.timers}
          />
        </Grid>
        <Grid item xs={12}>
          <ToggleableTimerForm isOpen={true} />
        </Grid>
      </Grid>
    );
  }
}

TimersDashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimersDashboard);
