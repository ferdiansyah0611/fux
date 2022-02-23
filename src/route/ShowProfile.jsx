import '@style/component/ShowProfile.sass'
import React, {
	useState, useEffect
} from 'react'
import {
	useDispatch, useSelector
} from 'react-redux'
import {
	useNavigate, Link, useParams, useLocation
} from 'react-router-dom'
import { opendialog } from '@s/app'

export default function ShowProfile() {
	const to = useNavigate()
	const dispatch = useDispatch()
	const locate = useLocation()
	const user = useSelector(state => state.user)
	const [tabs, settabs] = useState('')
	useEffect(() => {
		var val = new URLSearchParams(locate.search).get('tabs')
		settabs(val || 'posts')
	}, [locate])
	return(
		<div className="containers show-profile">
			<section className="detail">
				<div className="img">
					<img src={user.avatar} alt=""/>
				</div>
				<div>
					<div className="profile">
						<p>{user.name}</p>
						<div className="flex space-x-2 flex-1">
							<button className="outline-profile">Message</button>
							<button className="outline-profile">Followed</button>
							<button className="outline-profile">
								<ion-icon name="chevron-down-outline"></ion-icon>
							</button>
							<button className="flex items-center drop">
								<ion-icon name="ellipsis-horizontal-outline"></ion-icon>
								<div className="dropdown text-left text-sm" style={{minWidth: 120}}>
									<a href="/" className="text-red-500">Block</a>
									<a href="/" className="text-red-500">Restrict</a>
									<a href="/" className="text-red-500">Report</a>
									<a href="/">Cancel</a>
								</div>
							</button>
						</div>
					</div>
					<div className="count">
						<a href="/"><span>23</span> posts</a>
						<a href="/"><span>50,032</span> followers</a>
						<a href="/"><span>2,528</span> following</a>
					</div>
					<div className="description">
						<p>Public figure</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<a href="/">https://ferdiansyah.web.app</a>
					</div>
				</div>
			</section>
			<section className="posts">
				<div className="tabs">
					<Link to="?tabs=posts" className={tabs === 'posts' && "active"}>
						<ion-icon name="grid-outline"></ion-icon>
						<span>Posts</span>
					</Link>
					<Link to="?tabs=tagged" className={tabs === 'tagged' && "active"}>
						<ion-icon name="people-circle-outline"></ion-icon>
						<span>Tagged</span>
					</Link>
				</div>
				<div className="data">
				{
					[1,2,3,4,5,6,7,8,9].map(v => (
						<div className="item" onClick={() => dispatch(opendialog())}>
							<img src="https://images.unsplash.com/photo-1640622299541-8c8ab8a098f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
							<div className="hover">
								<div>
									<div>
										<ion-icon name="heart-outline"></ion-icon>
										<span>100</span>
									</div>
									<div>
										<ion-icon name="chatbubbles-outline"></ion-icon>
										<span>10</span>
									</div>
								</div>
							</div>
						</div>
					))
				}
				</div>
			</section>
		</div>
	)
}