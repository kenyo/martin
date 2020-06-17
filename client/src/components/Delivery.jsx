import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


function Delivery() {
  return (
    <div className='delivery-form'>
      <Form className='form'>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control type='text' placeholder="Enter Street Address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control type='text' placeholder="Zip Code" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type='phone' placeholder="Phone Number" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Delivery
