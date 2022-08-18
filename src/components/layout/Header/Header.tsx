import React, { FC } from 'react'
import styles from './Layout.module.scss'
import { ILayout } from './Layout.interface'

export const Layout: FC<ILayout> = ({ children }): JSX.Element => {
	return (
		<div className={styles.layout}>
			<div className={styles.content}>
				{children}
			</div>

		</div>
	)
}



