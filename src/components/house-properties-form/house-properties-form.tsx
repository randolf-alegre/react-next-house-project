"use client";
import { memo, useState } from "react";

const HousePropertiesForm = ({ index, houseProperty, deleteHouse, updateHouse }:{
  index: number;
  houseProperty: HouseProperty;
  deleteHouse: Function;
  updateHouse: Function;
}) => {
  const { numberOfFloors, color, id } = houseProperty;
  const [floorCount, setFloorCount] = useState(numberOfFloors || 1);
  const [selectedColor, setSelectedColor] = useState(color || undefined);

  return (
    <div className="flex flex-row items-start">
      <div className="flex flex-col grow mr-5">
        <div className="house-name">House ID: {index}</div>
        <div className="floor-total-count">
          <label htmlFor="vol">Floor: {floorCount}</label>
        </div>
        <div className="house-floor-count">
          <input
            data-testid={`${id}-floor`}
            className="w-full"
            value={floorCount}
            type="range"
            id="floor"
            name="floor"
            min="1"
            max="10"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFloorCount(parseInt(e.target.value));
              updateHouse({ id, numberOfFloors: e.target.value, color: selectedColor });
            }}
          />
        </div>
      </div>
      <div className="pt-6 mr-5">
        <div className="house-color">
          <label htmlFor="color">Color:</label>
          <select
            value={selectedColor}
            data-testid={`${id}-color`}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setSelectedColor(e.target.value);
              updateHouse({ id, numberOfFloors: floorCount, color: e.target.value });
            }}
          >
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="white">white</option>
          </select>
        </div>
      </div>
      <div className="flex">
        <span
          data-testid={`${id}-delete`}
          className="delete cursor-pointer"
          onClick={() => deleteHouse(id!)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default memo(HousePropertiesForm)