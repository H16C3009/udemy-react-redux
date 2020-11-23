import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';

import { getEvent, deleteEvents, putEvents } from '../actions'

class EventsShow extends Component {
  constructor(props) {
    //console.log('events_show')
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    //console.log(this.props.match.params.id)
    this.props.getEvent(this.props.match.params.id)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    //console.log('field:', field)
    return (
      <div>
        <input  {...input} placeholder={label} type={type} />
        { touched && error && <span>{error}</span> }
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.putEvents(values)
    this.props.history.push('/')
  }

  async onDeleteClick() {
    //console.log(this.props.match.params)
    await this.props.deleteEvents(this.props.match.params.id)
    this.props.history.push('/')
  }

  render () {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    //console.log('pristine', pristine)
    //console.log('submitting', submitting)
    //console.log('invalid', invalid)
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
          <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
          <div>
            <input type="submit" value="Submit" disabled={ pristine || submitting || invalid } />
            <Link to="/">Cancel</Link>
            <Link to="/" onClick={ this.onDeleteClick } >Delete</Link>
          </div>
        </form>
      </React.Fragment>
      
    )
  }
}

const validate = values => {
  const errors = {}
  
  if (!values.title) errors.title ="Enter a title, please."
  if (!values.body) errors.body ="Enter a body, please."

  return errors
}

const mapStateToProps = ( state, ownProps ) => {
  //console.log('state',state)
  //console.log('ownProps', ownProps)
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}
const mapDispatchToProps = ({ deleteEvents, getEvent, putEvents })

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ 
    validate, form: 'eventShowForm', enableReinitialize: true 
  })(EventsShow)
);
