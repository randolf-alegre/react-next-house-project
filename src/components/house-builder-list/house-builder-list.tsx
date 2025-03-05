import { memo } from "react";
import { HouseBuilder } from "../house-builder/house-builder";
const HouseBuilderList = ({ houselist }: { houselist: HouseProperty[] }) => {
  return (
    <div className="flex items-end flex-wrap pt-10 width-120">
      {houselist.map((house: HouseProperty) => (
        <HouseBuilder properties={house} key={house.id} />
      ))}
    </div>
  );
};

export default memo(HouseBuilderList)