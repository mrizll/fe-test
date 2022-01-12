import React from "react";
import FormInput from "./form-input.component";

import {render, screen} from '@testing-library/react'

it("renders without crashing", () => {
    render(<FormInput />)
    const formInput = screen.getByTestId('form-input')
    expect(formInput).toBeInTheDocument();
})

it("renders labels correctly", () => {
    render(<FormInput title="Test Title" subTitle="Test Subtitle" />)
    const title = screen.getByTestId('title')
    const subtitle = screen.getByTestId('subtitle')
    expect(title).toHaveTextContent('Test Title')
    expect(subtitle).toHaveTextContent('Test Subtitle')
})
