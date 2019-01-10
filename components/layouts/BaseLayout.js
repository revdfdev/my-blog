/**
 * @Author: webcubic3
 * @Date:   2019-01-10T17:13:51+05:30
 * @Last modified by:   webcubic3
 * @Last modified time: 2019-01-10T17:30:44+05:30
 */

import React from 'react'
import Header from '../shared/Header'

const BaseLayout = (props) => (
  <>
  <Header />
    {props.children}
  </>
)


export default BaseLayout;
