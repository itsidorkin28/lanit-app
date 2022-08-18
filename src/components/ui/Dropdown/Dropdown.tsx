import React, { useCallback, useEffect, useRef } from 'react'
import styles from './Dropdown.module.scss'
import { FC } from 'react'
import { useState } from 'react'
import { IDropdown } from './Dropdown.interface'
import { SvgDropdownArrow } from '../../../assets/images/Dropdown/DropdownArrow'

export const Dropdown: FC<IDropdown> = React.memo(({ selected, setSelected, data, title }): JSX.Element => {
	const [isActive, setIsActive] = useState<boolean>(false)
	const ref = useRef<any>()
	const onActive = () => setIsActive(!isActive)

	const setSelectedHandler = useCallback((filter: string) => {
		setSelected(filter)
		setIsActive(!isActive)
	}, [setIsActive, setSelected, isActive])
	useEffect(() => {
		const checkIfClickedOutside = (e: any) => {
			// @ts-ignore
			if (isActive && ref.current && !ref.current.contains(e.target)) {
				setIsActive(false)
			}
		}
		document.addEventListener('mousedown', checkIfClickedOutside)
		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside)
		}
	}, [isActive])
	// @ts-ignore
	return (
		<div className={'flex items-center'}>
			<div className={'mr-[12px]'}>
				<span className={'font-bold text-[#424551] leading-[160%]'}>{title}</span>
			</div>
			<div className={styles.dropdown} ref={ref}>
				<div className={styles.btn} onClick={onActive}>
					{selected}
					<SvgDropdownArrow />
				</div>
				{isActive && <div className={styles.content}>
					{data.map(el => {
						return (
							<div className={styles.item} key={el} onClick={() => setSelectedHandler(el)}>
								{el}
							</div>
						)
					})}
				</div>}
			</div>
		</div>
	)
})

