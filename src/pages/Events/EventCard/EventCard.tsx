import React, { FC } from 'react'
import { IEventCards } from '../../../store/eventCards/eventCards.interface'
import styles from './EventCard.module.scss'
import { getDay, getEndTime, getMonth, getStartTime } from '../../../utils/date/convertDate'

export const EventCard: FC<IEventCards> = React.memo(({ title, date, duration, type, id }): JSX.Element => {

	const dateNumber = getDay(date)
	const dateMonth = getMonth(date)
	const startTime = getStartTime(date)
	const endTime = getEndTime(date, duration)

	return (
		<div className={styles.card}>
			<div>
				<div>
					{dateNumber}
				</div>
				<div>
					<p>{dateMonth}</p>
					<p>{startTime} - {endTime}</p>
				</div>
			</div>

			<div>
				<h3>{title}</h3>
				<p>{type}</p>
			</div>

			<button className={styles.button}>
				View more
			</button>
		</div>
	)
})

