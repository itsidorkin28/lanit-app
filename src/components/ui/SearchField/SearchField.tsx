import React, { FC } from 'react'
import styles from './SearchField.module.scss'
import { ISearchField } from './SearchField.interface'

export const SearchField: FC<ISearchField> = ({ placeholder, searchTerm, setSearchTerm }) => {
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.currentTarget.value)
	return (
		<div>
			<input type='text' value={searchTerm} onChange={onChangeHandler}
			       placeholder={placeholder} className={styles.searchField} />
		</div>
	)
}

