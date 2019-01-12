/**
 * @Author: webcubic3
 * @Date:   2019-01-12T12:56:31+05:30
 * @Last modified by:   webcubic3
 * @Last modified time: 2019-01-12T13:17:06+05:30
 */
import React, { Component } from 'react';
import Link from 'next/link'
import {withRouter} from 'next/router'
/**
 * Portfolio
 */
class Portfolio extends Component {

  constructor(props) {
    super(props)
  }
   // eslint-disable-line react/prefer-stateless-function
  render() {
    const {router}= this.props
    return (
      <div>
        <h1>I am a portfolio page</h1>
        <h2>{router.query.title}</h2>
      </div>
    );
  }
}

export default withRouter(Portfolio);
