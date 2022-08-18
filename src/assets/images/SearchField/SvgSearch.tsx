import * as React from 'react'
import { SVGProps } from 'react'

export const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={16}
		height={16}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M7.25 2.167a5.083 5.083 0 1 0 0 10.166 5.083 5.083 0 0 0 0-10.166ZM.833 7.25a6.417 6.417 0 1 1 11.399 4.044l2.739 2.734a.667.667 0 1 1-.942.944l-2.74-2.736A6.417 6.417 0 0 1 .834 7.25Z'
			fill='#9A9CA5'
		/>
	</svg>
)

