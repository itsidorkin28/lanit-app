import React, { FC } from 'react'
import { IEventCards } from '../../../store/eventCards/eventCards.interface'
import styles from './EventCard.module.scss'
import { getDay, getEndTime, getMonth, getStartTime } from '../../../utils/date/convertDate'
import { ViewToggle, ViewToggleType } from '../../../shared/types/viewToggle.types'
import cn from 'classnames'

export const EventCard: FC<IEventCards & { viewToggle: ViewToggleType }> = React.memo(({
	                                                                                       title,
	                                                                                       date,
	                                                                                       duration,
	                                                                                       type,
	                                                                                       id,
	                                                                                       viewToggle,
                                                                                       }): JSX.Element => {

	const dateNumber = getDay(date)
	const dateMonth = getMonth(date)
	const startTime = getStartTime(date)
	const endTime = getEndTime(date, duration)

	return (
		<div className={cn({
			[styles.cardList]: viewToggle === ViewToggle.List,
			[styles.cardGrid]: viewToggle === ViewToggle.Grid,
		})}>
			<div className={styles.date}>
				<div>
					<span className={styles.number}>{dateNumber}</span>
					{viewToggle === ViewToggle.Grid &&<span className={styles.month}>&nbsp;{dateMonth}</span>}
				</div>
				<div className={styles.time}>
					{viewToggle === ViewToggle.List && <span className={styles.month}>{dateMonth}</span>}
					<p className={styles.hours}>{startTime} - {endTime}</p>
				</div>
			</div>

			<div className={styles.text}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.type}>{type}</p>
			</div>

			<button className={styles.button}>
				View more
			</button>

		</div>
	)
})

