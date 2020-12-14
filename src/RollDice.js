import React, {Component} from 'react';
import Die from "./Die";
import "./css/roll_dice.css"

class RollDice extends Component {

    static defaultProps = {
        sides: ["one", "two", "three", "five", "six"]
    }

    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "two",
            rolling: false
        }
        this.roll = this.roll.bind(this)
    }

    roll() {
        let idx1 = Math.floor(Math.random() * this.props.sides.length)
        const newDie1 = this.props.sides[idx1]
        let idx2 = Math.floor(Math.random() * this.props.sides.length)
        const newDie2 = this.props.sides[idx2]

        this.setState({die1: newDie1, die2: newDie2, rolling: true})

        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000)
    }

    render() {
        return (
            <div className="roll_dice">
                <div className="roll_dice-container">
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button
                    onClick={this.roll}
                    disabled={this.state.rolling}
                >
                    {this.state.rolling ? "Rolling..." : "Roll Dice"}
                </button>
            </div>
        )
    }
}

export default RollDice;