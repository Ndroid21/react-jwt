import React from 'react';
import { Form, Input } from "semantic-ui-react";

export default function ProductName(props) {
    return (
      <Form.Field required>
        <label>Name</label>
        <Input type="text" value={props.value} placeholder="Product Name" />
      </Form.Field>
    );
}
