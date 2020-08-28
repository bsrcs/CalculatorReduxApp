import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import * as serviceWorker from "./serviceWorker"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"
import { createStore } from "redux"

const initialState = {
  firstNum:0,
  secondNum:0,
  result: 0
}

export const CalculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      console.log("add reducer "+ JSON.stringify(action.payload));
      return {
        ...state,
        result: JSON.parse(action.payload.firstNum) + JSON.parse(action.payload.secondNum)
      };
    case "SUBTRACT":
      return {
        ...state,
        result: state.firstNum - state.secondNum
      };
    case "MULTIPLY":
      return {
        ...state,
        result: state.firstNum * state.secondNum
      };
    case "DIVIDE":
      return {
        ...state,
        result: state.firstNum / state.secondNum
      };
    default:
      return state;
  }
}

const store = createStore(CalculateReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)


serviceWorker.unregister()
