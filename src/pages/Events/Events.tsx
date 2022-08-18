import React, { useCallback, useEffect, useMemo } from 'react'
import { PageTitle } from '../../components/ui/PageTitle/PageTitle'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { EventCard } from './EventCard/EventCard'
import styles from './Events.module.scss'
import { Dropdown } from '../../components/ui/Dropdown/Dropdown'
import {
	CategoriesFilterType,
	NoveltyFilterType,
} from '../../store/eventCards/eventCards.interface'
import { setEventCardsCategoriesFilter, setEventCardsNoveltyFilter } from '../../store/eventCards/eventCards.slice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { categoriesOptions, noveltyOptions } from '../../components/ui/Dropdown/dropdown.data'
import { useSelectedCategories } from './useSelectedCategories'
import { Pagination } from '../../components/ui/Pagination/Pagination'
import { useState } from 'react'
import { NumberInput } from '../../components/ui/NumberInput/NumberInput'
import { SearchField } from '../../components/ui/SearchField/SearchField'
import { SvgList } from '../../assets/images/EventsToggle/List'
import { SvgGrid } from '../../assets/images/EventsToggle/Grid'
import cn from 'classnames'
import { ViewToggle, ViewToggleType } from '../../shared/types/viewToggle.types'

export const Events = (): JSX.Element => {
	const { getAllEventCards } = useActions()
	const dispatch = useAppDispatch()

	const [currentPage, setCurrentPage] = useState<number>(1)
	const [pageSize, setPageSize] = useState<number>(5)
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [viewToggle, setViewToggle] = useState<ViewToggleType>(ViewToggle.List)

	useEffect(() => {
		setCurrentPage(1)
	}, [searchTerm])

	useEffect(() => {
		getAllEventCards()
	}, [getAllEventCards])

	const eventCards = useTypedSelector(state => state.eventCards.eventCards)
	const isLoading = useTypedSelector(state => state.eventCards.isLoading)
	const selectedCategories = useTypedSelector(state => state.eventCards.categoriesFilter)
	const selectedNovelty = useTypedSelector(state => state.eventCards.noveltyFilter)
	const setSelectedCategories = useCallback((filter: CategoriesFilterType) => {
		dispatch(setEventCardsCategoriesFilter({ filter }))
		setCurrentPage(1)
	}, [dispatch])

	const setSelectedNovelty = useCallback((filter: NoveltyFilterType) => {
		dispatch(setEventCardsNoveltyFilter({ filter }))
		setCurrentPage(1)
	}, [dispatch])

	const eventsList = useSelectedCategories(selectedCategories, eventCards!)
	const searched = eventCards && eventsList.filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()))

	const setPageSizeHandler = useCallback((value: number) => {
		setPageSize(value)
		setCurrentPage(1)
	}, [])

	const currentEventsList = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * pageSize
		const lastPageIndex = firstPageIndex + pageSize
		if (searched !== undefined && searched !== null) {
			return searched.slice(firstPageIndex, lastPageIndex)
		}
		return searched
	}, [currentPage, pageSize, searched])

	const setViewToggleHandler = (value: ViewToggleType) => {
		setViewToggle(value)
	}


	return (
		<div className={styles.eventsWrapper}>
			<PageTitle title={'Our Events'} description={'Lectures, workshops & master-classes'} />

			<div className={styles.filters}>
				<Dropdown title={'Event category'} selected={selectedCategories} setSelected={setSelectedCategories}
				          data={categoriesOptions} />
				<Dropdown title={'Sort by'} selected={selectedNovelty} setSelected={setSelectedNovelty} data={noveltyOptions} />
				<NumberInput title={'Show'} value={pageSize} description={'events per page'} setPageSize={setPageSizeHandler} />
				<SearchField searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder={'Search event...'} />
				<div className={'flex justify-center items-center'}>
					<button className={'cursor-pointer'} type={'button'}
					     onClick={() => setViewToggleHandler(ViewToggle.List)}>
						<SvgList color={viewToggle === ViewToggle.List ? '#FF3F3A' : '#424551'} />
					</button>
					<button className={'ml-[0.85rem] cursor-pointer'} type={'button'}
					     onClick={() => setViewToggleHandler(ViewToggle.Grid)}>
						<SvgGrid color={viewToggle === ViewToggle.Grid ? '#FF3F3A' : '#424551'} />
					</button>
				</div>

			</div>
			{isLoading
				? <div className={styles.loading}>Loading...</div>
				: <div className={cn({
					[styles.gridView]: viewToggle === ViewToggle.Grid,
					[styles.listView]: viewToggle === ViewToggle.List,
				})}>
					{eventsList
						? currentEventsList?.map(cards => {
							return (
								<EventCard date={cards.date} title={cards.title} type={cards.type}
								           duration={cards.duration} id={cards.id} key={cards.id} viewToggle={viewToggle} />
							)
						})
						: <div>Events not found.</div>}
				</div>}
			<div className={'flex justify-center items-center mb-[180px]'}>
				{!isLoading && pageSize > 0 && eventsList && <Pagination
					className='pagination-bar'
					currentPage={currentPage}
					totalCount={searched?.length || 0}
					pageSize={pageSize}
					onPageChange={page => setCurrentPage(page)}
					siblingCount={2} />}
			</div>
		</div>
	)
}

