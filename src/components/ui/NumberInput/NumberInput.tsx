import React, { FC, useCallback } from 'react'
import styles from './NumberInput.module.scss'
import { INumberInput } from './NumberInput.interface'

export const NumberInput: FC<INumberInput> = React.memo(({ title, value, description, setPageSize }): JSX.Element => {

	const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setPageSize(+e.currentTarget.value)
	}, [setPageSize])

	return (
		<div className={'flex items-center'}>
			<div className={'mr-[12px]'}>
				<span className={'font-bold text-[#424551] leading-[160%]'}>{title}</span>
			</div>
			<input className={styles.numberInput} type='number' value={value} min={1} max={18}
			       onChange={onChangeHandler} />
			<div className={'ml-[12px]'}>
				<span className={'font-normal text-[#787A80] leading-[150%] text-[14px]'}>{description}</span>
			</div>
		</div>
	)
})

