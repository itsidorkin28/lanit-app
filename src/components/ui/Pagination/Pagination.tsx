import React from 'react'
import classnames from 'classnames'
import { usePagination, DOTS } from './usePagination'
import './Pagination.scss'
import { PaginationPropsType } from './Pagination.props'
import { SvgPageArrow } from '../../../assets/images/Pagination/PageArrow'

export const Pagination = (props: PaginationPropsType) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className,
	} = props

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	})

	if (currentPage === 0 || paginationRange!.length < 2) {
		return null
	}

	const onNext = () => {
		onPageChange(currentPage + 1)
	}

	const onPrevious = () => {
		onPageChange(currentPage - 1)
	}

	let lastPage = paginationRange![paginationRange!.length - 1]
	return (
		<ul
			className={classnames('pagination-container', { [className]: className })}
		>
			<li
				className={classnames('pagination-item', {
					disabled: currentPage === 1,
				})}
				onClick={onPrevious}
			>
				<div className={classnames({
					'arrowNone': currentPage === 1,
				})}>
					<SvgPageArrow className={'left'} />
				</div>
			</li>
			{paginationRange!.map((pageNumber, index) => {
				if (pageNumber === DOTS) {
					return <li key={index} className='pagination-item dots'>&#8230;</li>
				}

				return (
					<li key={index}
					    className={classnames('pagination-item', {
						    selected: pageNumber === currentPage,
					    })}
					    onClick={() => onPageChange(+pageNumber)}
					>
						{pageNumber}
					</li>
				)
			})}
			<li
				className={classnames('pagination-item', {
					disabled: currentPage === lastPage,
				})}
				onClick={onNext}
			>
				<div className={classnames({
					'arrowNone': currentPage === lastPage,
				})}>
					<SvgPageArrow />
				</div>
			</li>
		</ul>
	)
}





