/**
 * @Author: webcubic3
 * @Date:   2019-01-10T16:08:11+05:30
 * @Last modified by:   webcubic3
 * @Last modified time: 2019-01-11T17:04:44+05:30
 */

import React, {Component} from 'react';
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import SuperCoponent from '../components/SuperComponent'

class Index extends SuperCoponent {

	constructor(props) {
		debugger
		super(props)
		debugger
		this.state = {
			title: 'I am index page'
		}
		this.changeTitle = this.changeTitle.bind(this)
		debugger
		console.log("constructor")
	}

	changeTitle () {
		this.setState(prevState => ({
			title: prevState.title + " Update"
		}))
	}

	componentDidMount() {
		console.log("Component did mount")
		debugger
	}

	componentDidUpdate() {
		console.log("Component did update")
	}


	componentWillUnmount() {
		console.log("component Will Unmount")
	}

	render() {
		console.log("Render")
		return (
				<BaseLayout>
						<h1>Hi, I am index page</h1>
						<h2>{this.state.title}</h2>
						<button onClick={this.changeTitle}>Change Title</button>
				</BaseLayout>
		)
	}

}


export default Index


// <Header title={"Hello this is a header"}>
// 	<h1>I am header subtitle</h1>
// </Header>
