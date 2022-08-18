import React, { FC } from 'react'
import { IMainProvider } from './MainProvider.interface'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'

export const MainProvider: FC<IMainProvider> = ({ children }): JSX.Element => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					{children}
				</Layout>
			</BrowserRouter>
		</Provider>
	)
}

