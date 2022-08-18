import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import { SvgLogo } from '../../../assets/images/Logo/Logo'
import { menuData } from './menu.data'

export const Header: FC = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<NavLink to={'/'}>
					<SvgLogo />
				</NavLink>
			</div>

			<nav className={styles.menu}>
				{menuData.map(m => <NavLink to={m.path} key={m.path} className={({ isActive }) =>
					isActive ? styles.isActive : ''
				}>{m.name}</NavLink>)}
			</nav>

		</header>
	)
}



