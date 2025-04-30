import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
  test("renders learn react link", () => {
    render(<App />) // ! ဒီ Component ကို Run တာ
    const linkElement = screen.getByText(/learn react/i) // ! ဒီစာရှိလားသေချာစစ်
    // ! getByLabelText mean label tag ko pl shr tr

    expect(linkElement).toBeInTheDocument() // ! စစ်တာ
  })

  test("render 3 list items", () => {
    render(<App />)
    const listItems = screen.getAllByRole("listitem")
    expect(listItems.length).toEqual(3)
  })

  test("renders title", () => {
    render(<App />)
    const titleElement = screen.getByText(/hello/i)
    expect(titleElement).toBeInTheDocument()
  })

  describe("SUm", () => {
    test("sum should be 3", () => {
      render(<App />)
      const sumElement = screen.getByTitle("sum")
      expect(sumElement.textContent).toEqual("3")
    })
  })
})
