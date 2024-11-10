import {ReservationProvider} from '@/app/_components/ReservationContext'

export default function LayoutRouter({children}){
    return(
        <ReservationProvider>{children}</ReservationProvider>
    );
}