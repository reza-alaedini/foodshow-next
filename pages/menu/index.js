// template
import MenuPage from "@/components/templates/MenuPage";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10, //seconds
    // revalidate: 60 * 60, //1 hour | 60 * 60 * 2 => 2 hours
  };
}
