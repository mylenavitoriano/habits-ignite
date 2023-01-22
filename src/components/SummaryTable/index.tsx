import { genereteDatesFromYearBegnning } from '../../utils/generate-dates-from-year-beginning'
import { HabitDay } from '../HabitDay'
import './styles.scss'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = genereteDatesFromYearBegnning()

const minimunSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimunSummaryDatesSize - summaryDates.length

export function SummaryTable(){

    return(
        <div className='summaryTablet'>
            <div className='table'>
                {weekDays.map((weekDay, index) => (
                    <div className="day" key={`${weekDay}-${index}`}>{weekDay}</div>
                ))}
            </div>

            <div className="tableCheckHabit">
                {summaryDates.map(date => (
                    <HabitDay key={date.toString()}/>
                ))}

                {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => (
                    <div key={i} className="habitDayDisabled" />
                ))}
            </div>
        </div>
    )
}