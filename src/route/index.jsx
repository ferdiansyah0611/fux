import {
	BrowserRouter, Routes, Route, Outlet
} from 'react-router-dom'
import {
	useDispatch, useSelector
} from 'react-redux'
import Template from '@c/template'
import Navbar from '@c/Navbar'
import DialogPost from '@c/DialogPost'
// route
import Home from './Home'
import About from './About'
import ShowProfile from './ShowProfile'
import Inbox from './Inbox'

export default function route(){
	const app = useSelector((s) => s.app)
	return(
		<BrowserRouter>
			<Navbar/>
			{app.dialogpost.open && <DialogPost/>}
			<Routes>
				<Route path="/" element={<Template/>}>
					<Route index element={<Home/>}/>
					<Route path="about" element={<About/>}/>
					<Route path="profile">
						<Route path=":id" element={<ShowProfile/>}/>
					</Route>
					<Route path="direct">
						<Route path="inbox" element={<Inbox/>}/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}