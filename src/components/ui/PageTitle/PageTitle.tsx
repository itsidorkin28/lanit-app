import React, { FC } from 'react'
import styles from './PageTitle.module.scss'
import { IPageTitle } from './PageTitle.interface'

export const PageTitle: FC<IPageTitle> = React.memo(({ title, description }) => {
	return (
		<div className={styles.titleWrapper}>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	)
})



