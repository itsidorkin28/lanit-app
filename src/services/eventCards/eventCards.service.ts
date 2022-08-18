import { axiosInstance } from '../../api/instance'
import { getAllEventCardsUrl, getEventCardByIdUrl } from '../../config/api.config'
import { IEventCards } from '../../store/eventCards/eventCards.interface'

export const eventCardsService = {
	async getAllEventCards() {
		return await axiosInstance.get<IEventCards[]>(getAllEventCardsUrl())
	},
	async getEventCardById(id: string) {
		return await axiosInstance.get<IEventCards>(getEventCardByIdUrl(id))
	},
}
