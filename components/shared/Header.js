/**
 * @Author: webcubic3
 * @Date:   2019-01-10T16:14:43+05:30
 * @Last modified by:   webcubic3
 * @Last modified time: 2019-01-11T16:04:42+05:30
 */

import React, { Component } from "react";
import Link from "next/link";

/**
 * Header
 */
export class Header extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blogs">
          <a>Blog</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolios</a>
        </Link>
        <Link href="/cv">
          <a>CV</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <style jsx global>
          {`
            a {
              font-size: 14px;
              margin: 5px 5px;
              colors: "amber";
            }
            .xyz {
              color: green;
            }
          `}
        </style>
      </>
    );
  }
}

export default Header;
