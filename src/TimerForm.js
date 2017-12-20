import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class TimerForm extends React.Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <Card>
        <CardContent>
          <TextField
            id="title"
            label="Title"
            defaultValue={this.props.title}
          />
          <TextField
            id="project"
            label="Project"
            defaultValue={this.props.project}
          />
        </CardContent>
        <CardActions>
          <Button raised color='primary'>
            submitText
          </Button>
          <Button raised color='accent'>
            Cancel
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default TimerForm;
