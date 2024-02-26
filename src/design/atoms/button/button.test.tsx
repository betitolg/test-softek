import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import Button from './button'
import React from 'react'

describe('Render button ', () => {
  it('should render correctly', async () => {
    render(<Button onClick={()=>{}} primary={true} text={"prueba"} testId="button-test"/>)
    const button = screen.getByTestId('button-test')
    expect(button).toBeDefined()
  })
  
})

