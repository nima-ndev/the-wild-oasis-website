
import {getCabin} from '@/app/_lib/data-service'
import CabinCard from "@/app/_components/CabinCard";
export default async function CabinsList() {
    const test=await getCabin(2);
    // console.log(test);    
    const cabins = [test,test,test,test,test,test,test];
  return (
    <>
    {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
}