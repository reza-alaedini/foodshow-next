import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./CategoriesPage.module.css";

function CategoriesPage() {
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  const router = useRouter();

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value }); // [e.target.name] --> dynamic object key
  };

  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      //   query: { name: "parsa", lastname: "alaei" }, // --> /categories?name=parsa&lastname=alaei
      query,
    });
  };

  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.select}>
        <select
          value={query.difficulty}
          onChange={changeHandler}
          name="difficulty"
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select value={query.time} onChange={changeHandler} name="time">
          <option value="">Cooking time</option>
          <option value="more">More then 30 min</option>
          <option value="less">Less than 30 min</option>
        </select>
        <button onClick={searchHandler}>Search</button>
      </div>
    </div>
  );
}

export default CategoriesPage;
