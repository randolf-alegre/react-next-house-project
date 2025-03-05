"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import styles from "./style.module.css";
import { v4 as uuidv4 } from "uuid";
import { memo } from "react";
import { removeHouseRequest, updateHouseRequest, addNewHouseRequest } from "./house-property-list-request";
import HousePropertiesForm from "../house-properties-form/house-properties-form";
import React from "react";


const HousePropertyList = ({ houses }: { houses: HouseProperty[]}) => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteHouseAction } = useMutation({
    mutationFn: removeHouseRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["houses"] });
    },
  });

  const { mutateAsync: updateHouseAction } = useMutation({
    mutationFn: updateHouseRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["houses"] });
    },
  });

  const { mutateAsync: addNewHouseAction } = useMutation({
    mutationFn: addNewHouseRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["houses"] });
    },
  });

  return (
    <>
      <div className={`flex flex-col w-100 ${styles.housePropertyListWrapper}`}>
        <div className="fw-full bg-gray-300 mb-3">
          <h2 className="font-bold text-gray-900 p-3">Houses List</h2>
        </div>
        <div className="p-3">
          {!houses.length ? (
            <>
              <p>No data.</p>
            </>
          ) : (
            houses?.map((house: HouseProperty, index: number) => {
              return (
                <HousePropertiesForm
                  index={index + 1}
                  houseProperty={house}
                  key={`${index}-${house.id}`}
                  deleteHouse={deleteHouseAction}
                  updateHouse={updateHouseAction}
                />
              );
            })
          )}
        </div>
        <div className="flex justify-center p-3 bg-gray-300 mt-3">
          <button
            onClick={() =>
              addNewHouseAction({
                id: uuidv4(),
                numberOfFloors: 1,
                color: "white",
              })
            }
            className="bg-white hover:bg-gray-100 text-gray-800 font-normal text-sm py-1 px-4 border border-gray-400 rounded shadow"
          >
            <svg
              className="fill-current w-4 h-4 mr-2 inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
              />
            </svg>

            <span>Build a new house</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(HousePropertyList);
