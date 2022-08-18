import { createAsyncThunk } from '@reduxjs/toolkit'
import { eventCardsService } from '../../services/eventCards/eventCards.service'
import { IEventCards } from './eventCards.interface'

export const getAllEventCards = createAsyncThunk<IEventCards[]>('eventCards/getAll',
	async (_, { rejectWithValue }) => {
		try {
			const { data: EventCards } = await eventCardsService.getAllEventCards()
			return EventCards

		} catch (error) {
			console.log(error)
			return rejectWithValue(error)
		}
	})

export const getEventCardById = createAsyncThunk<IEventCards, { id: string }>('eventCards/getById',
	async ({ id }, { rejectWithValue }) => {
		try {
			const { data: EventCard } = await eventCardsService.getEventCardById(id)
			return EventCard

		} catch (error) {
			console.log(error)
			return rejectWithValue(error)
		}
	})
