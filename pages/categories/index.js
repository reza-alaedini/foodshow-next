//template
import CategoriesPage from "@/components/templates/CategoriesPage";

function Categories({ filteredData }) {
  console.log(filteredData);
  return <CategoriesPage />;
}

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  const filteredData = data.filter((food) => {
    const difficultyResult = food.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = food.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" "); // array destructuring
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });

    if (difficulty && time && difficultyResult.length && timeResult.length) {
      return food;
    } else if (!difficulty && time && timeResult.length) {
      return food;
    } else if (difficulty && !time && difficultyResult.length) {
      return food;
    }
  });

  return {
    props: { filteredData },
  };
}
