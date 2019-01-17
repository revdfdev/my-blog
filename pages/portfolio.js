/**
 * @Author: webcubic3
 * @Date:   2019-01-12T12:56:31+05:30
 * @Last modified by:   webcubic3
 * @Last modified time: 2019-01-12T13:17:06+05:30
 */
import React, { Component } from "react";
import { withRouter } from "next/router";
import axios from "axios";
/**
 * Portfolio
 */
class Portfolio extends Component {
  static async getInitialProps({ query }) {
    let postData;
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + query.id
      );
      console.log(`Response: ${JSON.stringify(response.data)}`);
      postData = response.data;
    } catch (error) {
      console.error(error.message);
    }
    return {
      postData
    };
  }

  constructor(props) {
    super(props);
    const { postData } = props;
    console.log("Post data", JSON.stringify(postData, null, 3));
  }
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { router } = this.props;
    return (
      <div>
        <h1>I am a portfolio page</h1>
        {this.props.postData && (
          <>
            <h2>{this.props.postData.title}</h2>
            <p>{this.props.postData.body}</p>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(Portfolio);
