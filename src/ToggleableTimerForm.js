import React, { Component } from 'react';
import { Add } from 'material-ui-icons';

import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <TimerForm />
      );
    } else {
      return (
        <Add />
      );
    }
  }
}

export default ToggleableTimerForm;
