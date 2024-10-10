import {getCabins} from '@/app/_lib/data-service'
export const metadata = {
    title:"cobin"
};
export default async function Cabins(){
    const test=await getCabins(1);

    
    return(
        <div>
            <p>cabins</p>
        </div>
    );
}