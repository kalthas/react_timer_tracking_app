import React, { Component } from 'react';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Delete, Edit } from 'material-ui-icons';

import { renderElapsedString } from './helpers';

class TimerActionButton extends React.Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <Button raised color='accent' onClick={this.props.onStopClick} >
          Stop
        </Button>
      );
    } else {
      return (
        <Button raised color='primary' onClick={this.props.onStartClick} >
          Start
        </Button>
      );
    }
  }
}

class Timer extends React.Component {

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };

  render() {
    const elapsedString = renderElapsedString(this.props.elapsed, this.props.runningSince);
    return (
      <Card>
        <CardContent>
          <Typography type='headline'>
            {this.props.title}
          </Typography>
          <Typography type='subheading'>
            {this.props.project}
          </Typography>
          <div>
            {elapsedString}
            <div>
              <Delete onClick={this.handleTrashClick} />
              <Edit onClick={this.props.onEditClick} />
            </div>
          </div>
        </CardContent>
        <CardActions>
          <TimerActionButton
            timerIsRunning={!!this.props.runningSince}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
        </CardActions>
      </Card>
    );
  }
}

export default Timer;
