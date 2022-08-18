export const getDay = (date: string) => {
	return new Date(date).toLocaleDateString('en-GB', {
		day: '2-digit',
	})
}

export const getMonth = (date: string) => {
	return new Date(date).toLocaleDateString('en-GB', {
		month: 'long',
	})
}

export const getStartTime = (date: string) => {
	return new Date(date).toLocaleTimeString('ru-RU')
}

export const getEndTime = (startDate: string, duration: number) => {
	const startDateMil = new Date(startDate).getTime()
	return new Date(startDateMil + duration).toLocaleTimeString('en-GB')
}
