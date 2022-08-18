import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	CategoriesFilter,
	CategoriesFilterType,
	IInitialState,
	NoveltyFilter,
	NoveltyFilterType,
} from './eventCards.interface'
import { getAllEventCards } from './eventCards.actions'

const initialState: IInitialState = {
	eventCards: null,
	categoriesFilter: CategoriesFilter.All,
	noveltyFilter: NoveltyFilter.Newest,
	isLoading: false,
}

export const eventCardsSlice = createSlice({
	name: 'eventCards',
	initialState,
	reducers: {
		setEventCardsCategoriesFilter(state, action: PayloadAction<{ filter: CategoriesFilterType }>) {
			state.categoriesFilter = action.payload.filter
		},
		setEventCardsNoveltyFilter(state, action: PayloadAction<{ filter: NoveltyFilterType }>) {
			state.noveltyFilter = action.payload.filter
			if (state.noveltyFilter === NoveltyFilter.Newest && state.eventCards) {
				state.eventCards = state.eventCards.sort((a, b) =>
					b.date.split('-').reverse().join().localeCompare(a.date.split('-').reverse().join()))
			}
			if (state.noveltyFilter === NoveltyFilter.Oldest && state.eventCards) {
				state.eventCards = state.eventCards.sort((a, b) =>
					a.date.split('-').reverse().join().localeCompare(b.date.split('-').reverse().join()))
			}
		},
	},
	extraReducers: builder => {
		builder.addCase(getAllEventCards.pending, state => {
			state.eventCards = null
			state.isLoading = true
		}).addCase(getAllEventCards.fulfilled, (state, { payload: EventCards }) => {
			state.eventCards = EventCards.sort((a, b) =>
				b.date.split('-').reverse().join().localeCompare(a.date.split('-').reverse().join()))
			state.isLoading = false
		}).addCase(getAllEventCards.rejected, state => {
			state.eventCards = null
			state.isLoading = false
		})
	},
})

export const { reducer } = eventCardsSlice
export const {
	setEventCardsCategoriesFilter,
	setEventCardsNoveltyFilter,
} = eventCardsSlice.actions
