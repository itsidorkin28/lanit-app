import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

interface IMenuData {
	path: string
	name: string
}

const menuData: IMenuData[] = [
	{ path: '/', name: 'About Us' },
	{ path: '/courses', name: 'Courses' },
	{ path: '/events', name: 'Events' },
	{ path: '/blog', name: 'Blog' },
	{ path: '/contacts', name: 'Contacts' },
]

export const Header: FC = (): JSX.Element => {
	return (
		<header className={styles.header}>
			Header
			<nav>
				{menuData.map(m => <Link to='about' key={m.path}>{m.name}</Link>)}
			</nav>
			<button className={styles.button}>Get consultation</button>
		</header>
	)
}



