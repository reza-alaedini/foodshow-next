//template
import CategoriesPage from "@/components/templates/CategoriesPage";

function Categories({ data }) {
  console.log(data);
  return <CategoriesPage data={data} />;
}

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/data`);
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
      } else if (time === "more" && timeDetail && +timeDetail > 30) {
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
    props: { data: filteredData },
  };
}
