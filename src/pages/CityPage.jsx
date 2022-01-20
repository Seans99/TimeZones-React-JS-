import classes from "/public/CityPage.module.css";

export default function CityPage(props) {
  let { list, goToCityList } = props;
  let { id, city, country, UTC, time_zone, facts, image } = list;

  return (
    <div key={id} className={classes.cityDetails}>
      <h1>{city}</h1>
      <button className={classes.back} onClick={() => goToCityList(0)}>
        Back
      </button>
    </div>
  );
}
