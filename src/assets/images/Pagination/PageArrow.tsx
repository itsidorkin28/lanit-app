import * as React from 'react'
import { SVGProps } from 'react'

export const SvgPageArrow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={18}
		height={12}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M11.793.793a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L14.586 7H1a1 1 0 0 1 0-2h13.586l-2.793-2.793a1 1 0 0 1 0-1.414Z'
			fill='#424551'
		/>
	</svg>
)

