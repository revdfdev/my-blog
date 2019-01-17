/**
 * @Author: webcubic3
 * @Date:   2019-01-10T16:08:11+05:30
 * @Last modified by:   rehank
 * @Last modified time: 2019-01-12T03:06:36+05:30
 */

import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import SuperCoponent from "../components/SuperComponent";
import { Container, Button } from "reactstrap";

class Index extends SuperCoponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Render");
    return (
      <BaseLayout>
        <Container>
        </Container>
      </BaseLayout>
    );
  }
}

export default Index;
