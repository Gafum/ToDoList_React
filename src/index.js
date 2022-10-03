import React from "react"
import ReactDOM from "react-dom/client"
import AddItem from "./addItem"
import Offers from "./Offers"
import "./main.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			items: [
				{ id: 0, text: "first" }
			],
    }
    this.adder = this.adder.bind(this)
    this.delete = this.delete.bind(this)
  }

  render() {
    return (
      <div className="central">
        <h1>Easy shop</h1>
        <AddItem adder={this.adder} />
        <Offers user={this.state.items} delete={this.delete} />
      </div>
    )
  }

  delete(index) {
    this.setState({ items: this.state.items.filter((x) => x.id !== index) })
    console.log(this.state.items, index)
  }

  adder(text) {
    this.setState({
      items: [...this.state.items, { id: this.state.items.length, text }],
    })
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
