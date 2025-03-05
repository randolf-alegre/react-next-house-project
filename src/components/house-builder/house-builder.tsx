import HouseGroundFloor from "./house-default-floor/house-default-floor";
import HouseFloor from "./house-floor/house-floor";
import style from "./style.module.css";

export function HouseBuilder({ properties }: { properties: HouseProperty }) {
  const createFloors = (count: number) => {
    const floors = [];
    for (let index = 2; index <= count; index++) {
        floors.push(<HouseFloor key={`house-floor-${index}`}/>)
    }

    floors.push(
        <div className={`${style.houseWrapper}`} key={'default-floor-01'}>
          <HouseGroundFloor />
        </div>
      );
    return floors;
  };
  return (
    <>
      <div className={`${style.container}`}>
        <div className={`${style.house}`} style={{ backgroundColor: properties.color}}>
          {createFloors(properties.numberOfFloors).map(item => (item))}
        </div>
      </div>
    </>
  );
}
