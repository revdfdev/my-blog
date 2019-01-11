/**
 * @Author: webcubic3
 * @Date:   2019-01-10T14:51:33+05:30
 * @Last modified by:   rehank
 * @Last modified time: 2019-01-12T03:13:36+05:30
 */



import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'

export default class Portfolios extends Component {

	static async getInitialProps () {
		let posts = [];
		try {
			const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
			posts = response.data
		} catch (err) {
			console.error(err)
		}

		return {posts}
	}

	render() {
		debugger;
		const { posts } = this.props;
		console.log(posts)
		debugger
		return (
			<BaseLayout>
				<h1>I am Portfolios page</h1>
			</BaseLayout>
		);
	}
}
