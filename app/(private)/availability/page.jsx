import React from "react";
import { getUserAvailability } from "@/actions/availability";
import { defaultAvailability } from "./data";
import { Suspense } from "react";
import AvailabilityForm from "./_components/AvailabilityForm";

export default function AvailabilityLayout() {
  return (
    <div className="mx-auto">
      <Suspense fallback={<div>Loading availability...</div>}>
        <AvailabilityPage/>
      </Suspense>
    </div>
  );
}

const AvailabilityPage= async() =>{
  const availability = await getUserAvailability();

  return <AvailabilityForm initialData={availability || defaultAvailability} />;
}