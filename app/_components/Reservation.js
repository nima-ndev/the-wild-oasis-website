import DateSelector from '@/app/_components/DateSelector'
import ReservationForm from './ReservationForm'

export default function Reservation() {
  return (
    <div>
      <div className='mb-10'>
        <DateSelector />
      </div>
      <ReservationForm />
    </div>
  )
}
