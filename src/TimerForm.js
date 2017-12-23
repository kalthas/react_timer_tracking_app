import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class TimerForm extends React.Component {

  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  };

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
  };

  handleProjectChange = (e) => {
    this.setState({project: e.target.value});
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project
    });
  };

  render() {
    const submitText = this.props.id ? 'Update' : 'Create';
    return (
      <Card>
        <CardContent>
          <TextField
            id="title"
            label="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <TextField
            id="project"
            label="Project"
            value={this.state.project}
            onChange={this.handleProjectChange}
          />
        </CardContent>
        <CardActions>
          <Button raised color='primary' onClick={this.handleSubmit}>
            {submitText}
          </Button>
          <Button raised color='accent' onClick={this.props.onFormClose}>
            Cancel
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default TimerForm;
