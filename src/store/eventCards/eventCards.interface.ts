export type CategoriesFilterType =
	'all themes'
	| 'dog'
	| 'bird'
	| 'fish'
	| 'snake'
	| 'crocodilia'
	| 'bear'
	| 'cetacean'
	| 'rabbit'
	| 'cat'
	| 'cow'
	| 'insect'
	| 'horse'
	| 'lion'

export enum CategoriesFilter {
	All = 'all themes',
	Dog = 'dog',
	Bird = 'bird',
	Fish = 'fish',
	Snake = 'snake',
	Crocodilia = 'crocodilia',
	Bear = 'bear',
	Cetacean = 'cetacean',
	Rabbit = 'rabbit',
	Cat = 'cat',
	Cow = 'cow',
	Insect = 'insect',
	Horse = 'horse',
	Lion = 'lion',
}

export type NoveltyFilterType = 'newest' | 'oldest'

export enum NoveltyFilter {
	Newest = 'newest',
	Oldest = 'oldest',
}

export interface IInitialState {
	eventCards: IEventCards[] | null
	categoriesFilter: CategoriesFilterType
	noveltyFilter: NoveltyFilterType
	isLoading: boolean
}

export interface IEventCards {
	date: string
	title: string
	type: string
	duration: number
	id: string
}
