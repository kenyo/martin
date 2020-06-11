import React from 'react'
import { Box } from 'rebass'
import { Label, Input } from '@rebass/forms'

function Delivery() {
  return (
    <div className="App">
      <Box>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='jane@example.com'
        />
      </Box>
    </div>
  );
}

export default Delivery
