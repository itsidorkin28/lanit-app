import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.scss'
import reportWebVitals from './reportWebVitals'
import { MainProvider } from './providers/MainProvider'
import { Routes, Route } from 'react-router-dom'
import { AboutUs } from './pages/AboutUs/AboutUs'
import { Courses } from './pages/Courses/Courses'
import { Events } from './pages/Events/Events'
import { Blog } from './pages/Blog/Blog'
import { Contacts } from './pages/Contacts/Contacts'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
)
root.render(
	<React.StrictMode>
		<MainProvider>
			<Routes>
				<Route path={'/'} element={<AboutUs />} />
				<Route path={'/courses'} element={<Courses />} />
				<Route path={'/events'} element={<Events />} />
				<Route path={'/blog'} element={<Blog />} />
				<Route path={'/contacts'} element={<Contacts />} />
			</Routes>
		</MainProvider>
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
