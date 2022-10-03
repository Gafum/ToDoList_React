import React, { useState } from "react"

export default function AddItem(props) {
  const [textFromInput, setTestFromInput] = useState("")
  function stopForm(event) {
    event.preventDefault()
    if (textFromInput.length) {
      props.adder(textFromInput)
    }
    setTestFromInput("")
  }
  return (
    <form onSubmit={stopForm}>
      <input
        placeholder="text"
        value={textFromInput}
        onChange={(event) => setTestFromInput(event.target.value)}
      />
      <button className="btn btn-blue" type="submit">
        Add
      </button>
    </form>
  )
}
