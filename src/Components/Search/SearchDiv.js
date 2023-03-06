import styles from "./SearchDiv.module.css";

function SearchDiv(props) {
  const changeHandler = (event) => {
    props.onSetCity(event.target.value);
  };
  return (
    <div className={styles["search-div"]}>
      <input
        type="text"
        onChange={changeHandler}
        value={props.city}
        className={styles.input}
      ></input>
      <button onClick={props.onGetData} className={styles.button}>
        <span>Search</span>
      </button>
      <p>{}</p>
    </div>
  );
}

export default SearchDiv;
