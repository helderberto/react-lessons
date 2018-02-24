'use strict';

const React = require('react');

const Title = class Title extends React.Component {
  render() {
    return(
      React.createElement('h1', null, 'Título')
    )
  }
}

module.exports = Title;
