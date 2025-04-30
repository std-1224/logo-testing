import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login/Login"
import userEvent from "@testing-library/user-event"

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: { id: 1, firstname: "Aung" },
    }),
  },
}))

// !
beforeEach(() => {
  console.log("This will run before each test");
  render(<Login />)
})

afterAll(() =>{
  console.log("This will run once after all of the test will finish");
  
})

afterEach(() => {
  console.log("This will run after each test");
  
})

// ! render check
test("username input should be random", () => {
  const usernameInputEle = screen.getByPlaceholderText(/username/i)
  expect(usernameInputEle).toBeInTheDocument()
})

test("password input should be masked", () => {
  const passwordInputEle = screen.getByPlaceholderText(/password/i)
  expect(passwordInputEle).toBeInTheDocument()
})

test("button should be rendered", () => {
  const buttonInputEle = screen.getByRole("button") // ! element ko phan tr
  expect(buttonInputEle).toBeInTheDocument()
})

// ! empty check

test("username input should be empty", () => {
  const usernameInputEle = screen.getByPlaceholderText(/username/i) as HTMLInputElement
  expect(usernameInputEle.value).toBe("")
})

test("password input should be empty", () => {
  const passwordInputEle = screen.getByPlaceholderText(/password/i) as HTMLInputElement
  expect(passwordInputEle.value).toBe("")
})

test("button should be disabled", () => {
  const buttonInputEle = screen.getByRole("button")
  expect(buttonInputEle).toBeDisabled()
})

// ! error message

test("error message should be visible", () => {
  // const errorMessageEle = screen.getByTestId("error")
  const errorMessageEle = screen.queryByText("Something went wrong!")
  expect(errorMessageEle).not.toBeVisible()
  // expect(errorMessageEle).toBeVisible();
  expect(errorMessageEle).toBeInTheDocument()
  expect(errorMessageEle?.textContent).toBe("Something went wrong!")
})

// ! state

test("username input should be change", () => {
  const usernameInputEle = screen.getByPlaceholderText(/username/i) as HTMLInputElement
  const testValue = "test"
  
  userEvent.type(usernameInputEle,testValue)
  // fireEvent.change(usernameInputEle, { target: { value: testValue } })

  expect(usernameInputEle.value).toBe(testValue)
})

test("password input should be change", () => {
  const passwordInputEle = screen.getByPlaceholderText(/password/i) as HTMLInputElement
  const testValue = "test"

  fireEvent.change(passwordInputEle, { target: { value: testValue } })
  expect(passwordInputEle.value).toBe(testValue)
})

test("button should not be disabled when inputs exists", () => {
  const buttonEle = screen.getByRole("button")
  const usernameInputEle = screen.getByPlaceholderText(/username/i)
  const passwordInputEle = screen.getByPlaceholderText(/password/i)

  const testValue = "test"
  fireEvent.change(usernameInputEle, { target: { value: testValue } })
  fireEvent.change(passwordInputEle, { target: { value: testValue } })

  expect(buttonEle).not.toBeDisabled()
})

// ! Loading
test("loading should not be rendered", () => {
  const loadingEle = screen.getByRole("button")
  expect(loadingEle).not.toHaveTextContent(/loading.../i)
})

test("loading should be rendered when click", () => {
  const buttonEle = screen.getByRole("button",{
  })
  // const usernameInputEle = screen.getByPlaceholderText(/username/i)
  const usernameInputEle = screen.getByRole("textbox",{
    name : /text/i
  })
  const passwordInputEle = screen.getByPlaceholderText(/password/i)
  const testValue = "test"

  fireEvent.change(usernameInputEle, { target: { value: testValue } })
  fireEvent.change(passwordInputEle, { target: { value: testValue } })
  fireEvent.click(buttonEle)

  expect(buttonEle).toHaveTextContent(/loading.../i)
})

test("loading should not be rendered after fetching", async () => {
  const buttonEle = screen.getByRole("button")
  const usernameInputEle = screen.getByPlaceholderText(/username/i)
  const passwordInputEle = screen.getByPlaceholderText(/password/i)
  const testValue = "test"

  fireEvent.change(usernameInputEle, { target: { value: testValue } })
  fireEvent.change(passwordInputEle, { target: { value: testValue } })
  fireEvent.click(buttonEle)

  // ! can't use getbytext because its synchronous
  const userSpanItem = await screen.findByText("Aung") // ! should use findbyTest

  expect(userSpanItem).not.toBeEmptyDOMElement()
  expect(userSpanItem).toBeInTheDocument()
})
