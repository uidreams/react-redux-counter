import React, { Component } from "react";
import { connect } from 'react-redux'

class Counter extends Component {
	render() {
		return (
			<div>
				<h2>Counter: {this.props.counter}</h2>
				<button onClick={this.props.increment}>Increment</button>
				<button onClick={this.props.decrement}>Decrement</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
