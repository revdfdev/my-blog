/**
 * @Author: webcubic3
 * @Date:   2019-01-10T14:51:33+05:30
 * @Last modified by:   webcubic3
 * @Last modified time: 2019-01-12T15:18:02+05:30
 */

import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import { Link } from "../routes";

export default class Portfolios extends Component {
  static async getInitialProps() {
    let posts = [];
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts = response.data;
    } catch (err) {
      console.error(err);
    }

    return { posts: posts.splice(0, 10) };
  }

  renderPosts(posts) {
    return posts.map(post => (
      <li key={post.id}>
        <div key={post.id}>
          <Link route={`/portfolio/${post.id}`}>
            <a style={{ fontSize: "20px" }}>{post.title}</a>
          </Link>
        </div>
      </li>
    ));
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>I am Portfolios page</h1>
        <ul>{this.renderPosts(posts)}</ul>
      </BaseLayout>
    );
  }
}
