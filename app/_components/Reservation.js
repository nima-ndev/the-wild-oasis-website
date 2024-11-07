import DateSelector from '@/app/_components/DateSelector'
import ReservationForm from './ReservationForm'
import {ReservationProvider} from '@/app/_components/ReservationContext'

export default function Reservation() {
  return (
    <ReservationProvider>
      <div className='mb-10'>
        <DateSelector />
      </div>
      <ReservationForm />
    </ReservationProvider>
  )
}
