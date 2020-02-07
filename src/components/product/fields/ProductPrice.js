import React from 'react';
import { Form, Input } from "semantic-ui-react";

export default function ProductPrice(props) {
    return (
      <Form.Field required>
        <label>Price</label>
        <Input type="text" value={props.value} placeholder="Product Price" onChange={props.onChange} name={props.name} />
      </Form.Field>
    );
}
