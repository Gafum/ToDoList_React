import React from "react"

export default function Offers(props) {
  return (
    <div>
      {props.user.map((el) => (
        <div className="offer" key={el.id}>
          <p>{el.text}</p>
          <button className="btn" onClick={() => props.delete(el.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  )
}
