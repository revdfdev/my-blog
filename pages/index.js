/**
 * @Author: webcubic3
 * @Date:   2019-01-10T16:08:11+05:30
 * @Last modified by:   rehank
 * @Last modified time: 2019-01-12T03:06:36+05:30
 */

import React, {Component} from 'react';
import Header from '../components/shared/Header'
import BaseLayout from '../components/layouts/BaseLayout'
import SuperCoponent from '../components/SuperComponent'
import axios from 'axios';

class Index extends SuperCoponent {

	static async getInitialProps() {
		console.log("I am initial props")
		let userdata;
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
			userdata = response.data
		}catch(err) {
			console.log(err)
		}
		return {initialData: [1,2,3,4], userdata}
	}

	constructor(props) {
		super(props)
		this.state = {
			title: 'I am index page'
		}
		this.changeTitle = this.changeTitle.bind(this)
		console.log("constructor")
	}

	changeTitle () {
		this.setState(prevState => ({
			title: prevState.title + " Update"
		}))
	}

	componentDidMount() {
		console.log("Component did mount")
	}

	componentDidUpdate() {
		console.log("Component did update")
	}


	componentWillUnmount() {
		console.log("component Will Unmount")
	}

	render() {
		console.log("Render")
		const {initialData, userdata} = this.props
		return (
				<BaseLayout>
						<h1>Hi, I am index page</h1>
						<h2>{userdata.title}</h2>
						<button onClick={this.changeTitle}>Change Title</button>
				</BaseLayout>
		)
	}

}


export default Index
