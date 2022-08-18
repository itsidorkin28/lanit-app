import { CategoriesFilter, CategoriesFilterType, IEventCards } from '../../store/eventCards/eventCards.interface'

export const useSelectedCategories = (selectedCategories: CategoriesFilterType, eventCards: IEventCards[]) => {
	let eventsList
	switch (selectedCategories) {
		case CategoriesFilter.Dog:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Cat:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Bird:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Fish:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Snake:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Cow:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Bear:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Cetacean:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Crocodilia:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Rabbit:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Lion:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Insect:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		case CategoriesFilter.Horse:
			eventsList = eventCards.filter(card => card.type === selectedCategories)
			break
		default:
			eventsList = eventCards
	}
	return eventsList
}
