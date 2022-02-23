import '@style/component/Navbar.sass'
import React from 'react'
import {
	useDispatch, useSelector
} from 'react-redux'
import {
	Link
} from 'react-router-dom'

export default function Navbar() {
	const dispatch = useDispatch()
	const user = useSelector((s) => s.user)
	return(
		<nav className="navbar containers">
			<div className="one">
				<div>
					<Link to="/">
						Fux
					</Link>
				</div>
				<div>
					<input className="p-1 px-2" type="search" placeholder="Type Here"/>
				</div>
			</div>
			<div className="three">
				<Link to="/" className="hidden md:block">
					<ion-icon name="home-outline"></ion-icon>
				</Link>
				<Link to="/direct/inbox">
					<ion-icon name="chatbox-outline"></ion-icon>
				</Link>
				<a href="/">
					<ion-icon name="add-circle-outline"></ion-icon>
				</a>
				<a href="/">
					<ion-icon name="aperture-outline"></ion-icon>
				</a>
				<a href="/">
					<ion-icon name="heart-outline"></ion-icon>
				</a>
				<button className="flex items-center relative cursor-pointer drop">
					<img src={user.avatar} className="avatar" alt=""/>
					<div className="dropdown icons text-sm" style={{minWidth: '200px'}}>
						<a href="/">
							<ion-icon name="person-circle-outline"></ion-icon>
							<span>Profiles</span>
						</a>
						<a href="/">
							<ion-icon name="bookmark-outline"></ion-icon>
							<span>Saved</span>
						</a>
						<a href="/">
							<ion-icon name="settings-outline"></ion-icon>
							<span>Settings</span>
						</a>
						<a href="/">
							<ion-icon name="toggle-outline"></ion-icon>
							<span>Switch Accounts</span>
						</a>
						<a href="/">
							<ion-icon name="log-out-outline"></ion-icon>
							<span>Logout</span>
						</a>
					</div>
				</button>
			</div>
		</nav>
	)
}