import Spinner from "@/app/_components/Spinner";
export default function Loading(){
    return (
        <div className="w-full h-full flex justify-center items-center flex-col gap-4">
            <Spinner/>
            <p className="to-slate-100">loading cabins...</p>
        </div>
    );
}