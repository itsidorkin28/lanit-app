import React, { FC } from 'react'
import styles from './Footer.module.scss'
import { SvgHeart } from '../../../assets/images/Footer/SvgHeart'

export const Footer: FC = (): JSX.Element => {
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<footer className={styles.footer}>
			<div className={styles.top}>
				top
			</div>
			<div className={styles.bottom}>
				<div className={'flex justify-between items-center w-4/5'}>
					<span className={'text-[0.75rem] leading-[150%]'}>© All rights reserved. Made with <SvgHeart
						className={'inline-block'} /> by Createx Studio </span>
					<button className={styles.button} onClick={goToTop}>GO TO TOP</button>
				</div>
			</div>
		</footer>
	)
}



