import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"
import { Input, InputGroup } from "reactstrap"
import { connect } from "react-redux"
import {CalculateReducer} from "../index"

class Calculation extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0
    }
  }
  changeFirstNum = e => {
    this.setState({firstNumber: e.target.value})
    console.log("First num has changed " + this.state.firstNumber);
  }

  changeSecNum = e => {
    this.setState({secondNumber: e.target.value})
    console.log("Second num has changed " + this.state.secondNumber);
  }

  render() {
    return (
      <>
        <InputGroup>
          <Input type="number" placeholder="First number" onChange={this.changeFirstNum} />
          <Input type="number" placeholder="Second number" onChange={this.changeSecNum}/>
          <ButtonGroup>
            <Button onClick={ () => this.props.actions.addNumbers(this.state.firstNumber, this.state.secondNumber)}>+</Button>
            <Button onClick={ () => this.props.actions.subtractNumbers()}>-</Button>
            <Button onClick={ () => this.props.actions.multiplyNumbers()}>*</Button>
            <Button onClick={ () => this.props.actions.divideNumbers()}>/</Button>
          </ButtonGroup>
        </InputGroup>
        <h3>Result: {this.props.opResult}</h3>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    opResult: state.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      addNumbers: (firstNum, secondNum) => {
        dispatch({type:"ADD", payload: {firstNum, secondNum}})
      },
      subtractNumbers: (firstNum, secondNum) => {
        dispatch({type:"SUBTRACT", payload: firstNum-secondNum})
      },
      multiplyNumbers: (firstNum, secondNum) => {
        dispatch({type:"MULTIPLY", payload: firstNum*secondNum})
      },
      divideNumbers: (firstNum, secondNum) => {
        dispatch({type:"DIVIDE", payload: firstNum/secondNum})
      }
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculation)