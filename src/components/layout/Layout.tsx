import React, { FC } from 'react'
import styles from './Layout.module.scss'
import { ILayout } from './Layout.interface'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { Subscribe } from './Subscribe/Subscribe'

export const Layout: FC<ILayout> = ({ children }): JSX.Element => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.content}>
				{children}
			</main>
			<Subscribe />
			<Footer />
		</div>
	)
}



