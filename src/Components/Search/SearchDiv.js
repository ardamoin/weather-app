import { useState } from "react";

function SearchDiv(props) {
  const changeHandler = (event) => {
    props.onSetCity(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={changeHandler} value={props.city}></input>
      <button onClick={props.onGetData}>Search</button>
      <p>{}</p>
    </div>
  );
}

export default SearchDiv;
