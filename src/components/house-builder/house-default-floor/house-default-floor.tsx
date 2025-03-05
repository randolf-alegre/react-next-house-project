import style from "../style.module.css";

export default function HouseGroundFloor() {
    return(
        <div className={`${style.defaultFloor}`}>
        <div className={`${style.window}`}></div>
        <div className={`${style.door}`}></div>
        <div className={`${style.flower}`}></div>
      </div>
    )
}