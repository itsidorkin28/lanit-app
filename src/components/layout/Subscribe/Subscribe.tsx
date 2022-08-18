import React, { FC } from 'react'
import styles from './Subscribe.module.scss'
import { PageTitle } from '../../ui/PageTitle/PageTitle'

export const Subscribe: FC = (): JSX.Element => {
	return (
		<section className={styles.subscribe}>
			<PageTitle title={'Don’t miss anything'} description={'Subscribe to the Createx School announcements'} />
			<form>
				<input type='email' placeholder={'Your working email'} className={styles.input}/>
				<button type={'submit'} className={styles.btn}>Subscribe</button>
			</form>
		</section>
	)
}



