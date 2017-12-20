import React, { Component } from 'react';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Delete, Edit } from 'material-ui-icons';

import { renderElapsedString } from './helpers';

class Timer extends React.Component {
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
              <Delete />
              <Edit />
            </div>
          </div>
        </CardContent>
        <CardActions>
          <Button raised color='accent'>
            Stop
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Timer;
