import React, { useEffect } from 'react'
import { PageTitle } from '../../components/ui/PageTitle/PageTitle'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Events = (): JSX.Element => {
	const { getAllEventCards } = useActions()
	useEffect(() => {
		getAllEventCards()
	}, [getAllEventCards])
	const eventCards = useTypedSelector(state => state.eventCards.eventCards)
	const isLoading = useTypedSelector(state => state.eventCards.isLoading)
	return (
		<div>
			<PageTitle title={'Our Events'} description={'Lectures, workshops & master-classes'} />
			{isLoading
				? <div>Loading...</div>
				: <div>
					{eventCards
						? eventCards.map(cards => <div key={cards.id}>{cards.title}</div>)
						: <div>Events not found.</div>}
				</div>}
		</div>
	)
}

