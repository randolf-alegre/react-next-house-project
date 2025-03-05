import style from "../style.module.css";
export default function HouseFloor() {
  return (
    <div className={`${style.defaultFloor}`}>
      <div className={`${style.window}`}></div>
    </div>
  );
}
