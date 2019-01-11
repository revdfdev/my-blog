/**
 * @Author: webcubic3
 * @Date:   2019-01-10T14:51:39+05:30
 * @Last modified by:   webcubic3
 * @Last modified time: 2019-01-11T16:55:32+05:30
 */



import React, { Component } from 'react';
import BaseLayout from './layouts/BaseLayout'

export default class SuperCoponent extends Component {

  constructor() {
    super()
    this.someVariable = "Just some variable"
  }

  alertName(title) {
    alert(title)
  }

	render() {
		return (
			<BaseLayout>
				<h1>I am Blogs page</h1>
			</BaseLayout>
		);
	}
}
