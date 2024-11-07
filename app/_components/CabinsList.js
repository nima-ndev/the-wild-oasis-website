
import {getCabins} from '@/app/_lib/data-service'
import CabinCard from "@/app/_components/CabinCard";
export default async function CabinsList({filter}) {
  const cabins=await getCabins();
  let currentCabins;
  if(filter=='small'){currentCabins=cabins.filter((cabin) => cabin.maxCapacity <= 3)}
  else if(filter=='medium'){currentCabins=cabins.filter(item=>item.maxCapacity <=7)}
  else if(filter=='large'){currentCabins=cabins.filter(item=>item.maxCapacity > 7)}
  else if(filter=='all'){currentCabins=cabins}

  
  return (
    <>
    {currentCabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {currentCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
}
