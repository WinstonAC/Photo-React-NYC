import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
 
class Mail extends Component {
  render() {
    return (
        <Mailchimp
        action="https://gmail.us7.list-manage.com/subscribe/post?u=96d20fd4f268424aaae1690b6&amp;id=9b9608b321"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        />
    );
  }
}
 
export default Mail;

