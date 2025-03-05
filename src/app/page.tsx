"use client";
import HouseBuilderList from "@/components/house-builder-list/house-builder-list";
import HousePropertyList from "@/components/house-property-list/house-property-list";

import { getHousesData } from "@/components/house-property-list/house-property-list-request";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const fetchHouses = async () => {
    const result = await getHousesData();
    localStorage.setItem("houses", JSON.stringify(result));
    return result;
  };

  const { data: houses, isLoading } = useQuery({
    queryKey: ["houses"],
    queryFn: fetchHouses,
    staleTime: Infinity,
  });

  if (isLoading) {
    return <div>loading....</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="width-full p-8 bg-gray-50 mb-10 border-top-1 border-1 border-gray-200">
        <h1 className="text-lg text-red-900">City Builder</h1>
      </div>

      <div className="flex flex-row items-start">
        <HousePropertyList houses={houses} />
        <HouseBuilderList houselist={houses} />
      </div>
    </div>
  );
}
