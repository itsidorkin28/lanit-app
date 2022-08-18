import { CategoriesFilter, IInitialState, NoveltyFilter } from '../store/eventCards/eventCards.interface'
import { setEventCardsCategoriesFilter, setEventCardsNoveltyFilter } from '../store/eventCards/eventCards.slice'
import { reducer as eventCardsReducer } from '../store/eventCards/eventCards.slice'
import { getAllEventCards } from '../store/eventCards/eventCards.actions'

let startState: IInitialState

beforeEach(() => {
	startState = {
		eventCards: null,
		categoriesFilter: CategoriesFilter.All,
		noveltyFilter: NoveltyFilter.Newest,
		isLoading: false,
	}
})


test('filter by categories should change correctly', () => {
	const action = setEventCardsCategoriesFilter({ filter: CategoriesFilter.Cat })
	const endState = eventCardsReducer(startState, action)

	expect(endState.categoriesFilter).toBe(CategoriesFilter.Cat)
})

test('novelty filter should change correctly', () => {
	const action = setEventCardsNoveltyFilter({ filter: NoveltyFilter.Oldest })
	const endState = eventCardsReducer(startState, action)

	expect(endState.noveltyFilter).toBe(NoveltyFilter.Oldest)
})

test('event cards should be added for state', () => {
	const eventCards = [
		{
			id: '1', duration: 10000, type: CategoriesFilter.Dog, title: 'Some event', date: '01/01/2022',
		},
	]
	const action = getAllEventCards.fulfilled(eventCards, 'getAll')

	const endState = eventCardsReducer(
		startState,
		action,
	)

	expect(endState.eventCards?.length).toBe(1)
	expect(endState.eventCards![0].id).toBe('1')
	expect(endState.eventCards![0].title).toBe('Some event')
})

test('loading must be active', () => {
	const action = getAllEventCards.pending('loading')

	const endState = eventCardsReducer(startState, action)

	expect(endState.isLoading).toBe(true)
})
