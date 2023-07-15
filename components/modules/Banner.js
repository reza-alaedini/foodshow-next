import Link from "next/link";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>FoodShow</h2>
          <p>Food Delivery and Takeout!</p>
          <span>
            FoodShow is an online food ordering and delivery platform launched
            by Reza in 2023. Meals are delivered by couriers using cars,
            scooters, bikes, or on foot.
          </span>
          <Link href="/menu">See All</Link>
        </div>
        <div className={styles.right}>
          <img src="/images/banner.png" alt="food image" />
        </div>
      </div>
    </>
  );
}

export default Banner;
