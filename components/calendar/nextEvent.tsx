// should do current time - next scheduled event and show a countdown
import dayjs from "dayjs"
export default function NextEvent() {
  const currentDay = dayjs().get('date')
  const nextMonth = dayjs().get('month')
  return (
  <div className="border">
    Next event in: {`${currentDay - nextMonth}`}
  </div>
  )
}