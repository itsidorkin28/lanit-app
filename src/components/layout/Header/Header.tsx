import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { SvgLogo } from '../../../assets/images/Logo/Logo'
import { menuData } from './menu.data'

export const Header: FC = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<SvgLogo />
			</div>

			<nav className={styles.menu}>
				{menuData.map(m => <Link to={m.path} key={m.path}>{m.name}</Link>)}
			</nav>

			<div className={styles.cta}>
				<button className={styles.button}>Get consultation</button>
				<div>
					<Link to={'/auth'}>Login / Register</Link>
				</div>
			</div>
		</header>
	)
}



