import React, { Component } from 'react';
import { Add } from 'material-ui-icons';

import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {

  state = {
    isOpen: false
  };

  handleFormOpen = () => {
    this.setState({isOpen: true});
  };

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({isOpen: false});
  };

  handleFormClose = () => {
    this.setState({isOpen: false});
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <Add onClick={this.handleFormOpen} />
      );
    }
  }
}

export default ToggleableTimerForm;
