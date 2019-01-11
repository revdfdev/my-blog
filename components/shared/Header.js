 /**
 * @Author: webcubic3
 * @Date:   2019-01-10T16:14:43+05:30
 * @Last modified by:   rehank
 * @Last modified time: 2019-01-11T02:50:48+05:30
 */


import React, { Component } from 'react';
import Link from 'next/link'


/**
 * Header
 */
export class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {title, children} = this.props

    return (
      <>
      <a>{title}</a>
      {children}
      <p class='customClass'>I am a styled p elemnts</p>
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
      <style jsx> {
        `a {
            font-size: 18px;
            margin: 5px 5px;
          };
          .customClass {
            color: red;
          }`
      }
      </style>
      </>
    );
  }
}

export default Header;
