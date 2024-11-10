import { Suspense } from "react";
import CabinsList from "@/app/_components/CabinsList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "@/app/_components/ReservationReminder";



export const relative=3600;
export const metadata = {
    title:"cobin"
};
export default function Cabins({searchParams}){
  const filter = searchParams?.capacity ?? "all";

    return (
      <div>
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
          Our Luxury Cabins
        </h1>
        <p className="text-primary-200 text-lg mb-10">
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending your
          days exploring the dark forests around, or just relaxing in your private
          hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
          away from home. The perfect spot for a peaceful, calm vacation. Welcome
          to paradise.
        </p>
        <div className="w-full flex justify-end my-4">
          <Filter />
        </div>
        <Suspense fallback={<div className="w-full h-full flex justify-center pt-16"><Spinner /></div>} filter={filter}>
          <CabinsList filter={filter} />
          <ReservationReminder />
        </Suspense>
      </div>
    );
}