import { API_ENDPOINT } from "@/app/utils";

export async function getHousesData() {
  const result = await fetch(API_ENDPOINT, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await result.json();
}

export async function addNewHouseRequest(payload: HouseProperty) {
  const result = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...payload }),
  });
  return await result.json();
}

export async function removeHouseRequest(id: string) {
  const result = await fetch(API_ENDPOINT, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  return await result.json();
}

export async function updateHouseRequest(payload: HouseProperty) {
  const result = await fetch(API_ENDPOINT, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...payload }),
  });
  return await result.json();
}
