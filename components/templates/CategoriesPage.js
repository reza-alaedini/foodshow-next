import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./CategoriesPage.module.css";

// modules
import Card from "../modules/Card";

function CategoriesPage({ data }) {
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  const router = useRouter();

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

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
      <div className={styles.cards}>
        {!data.length && <img src="/images/search.png" alt="Categories page" />}
        {data.map((food) => (
          <Card key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
