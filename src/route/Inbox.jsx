import '@style/component/Inbox.sass'
import React, {
	useState, useEffect, useCallback
} from 'react'
import {
	useDispatch, useSelector
} from 'react-redux'
import {
	useNavigate, Link, useParams, useLocation
} from 'react-router-dom'

export default function Inbox() {
	const to = useNavigate()
	const locate = useLocation()
	const dispatch = useDispatch()
	const [open, setopen] = useState('')
	const [openinfo, setopeninfo] = useState(false)
	const [tabs, settabs] = useState('')
	useEffect(() => {
		var val = new URLSearchParams(locate.search).get('tabs')
		settabs(val || 'primary')
	}, [locate])
	const user = useSelector(state => state.user)
	const opened = useCallback(() => {
		setopen(true)
	}, [])
	const handleinfo = () => setopeninfo(!openinfo)
	return(
		<div className="containers">
			<div className="inbox">
				<div className="left">
					<div className="action">
						<p>
							<span>{user.name}</span>
							<ion-icon name="chevron-down-outline"></ion-icon>
						</p>
						<div>
							<ion-icon name="create-outline"></ion-icon>
						</div>
					</div>
					<div className="choose">
						<Link to="?tabs=primary"className={tabs === 'primary' && "active"}>primary</Link>
						<Link to="?tabs=general"className={tabs === 'general' && "active"}>general</Link>
					</div>
					<div className="chat">
						{[1,1,1,1,1,1,1,1,1,1].map(v => (
							<div onClick={opened} className="item">
								<div>
									<img src={user.avatar} className="avatar" alt=""/>
								</div>
								<div>
									<p>ferdiansyah</p>
									<p>hello ferdiansyah you are the winner</p>
								</div>
							</div>
						))}
					</div>
				</div>
				{
					open && !openinfo &&
					<div className="right chat">
						<div className="info">
							<div>
								<div>
									<img className="avatar" src={user.avatar} alt=""/>
								</div>
								<p>ferdiansyah</p>
							</div>
							<div className="p-2 cursor-pointer" onClick={handleinfo}>
								<ion-icon name="information-circle-outline"></ion-icon>
							</div>
						</div>
						<div className="list"></div>
						<div className="input">
							<a href="/">
								<ion-icon name="happy-outline"></ion-icon>
							</a>
							<textarea placeholder="Message..." />
							<a href="/">
								<ion-icon name="image-outline"></ion-icon>
							</a>
							<a href="/">
								<ion-icon name="heart-outline"></ion-icon>
							</a>
						</div>
					</div>
				}
				{
					!open && !openinfo &&
					<div className="right intro">
						<div>
							<img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
							<h5>Your Messages</h5>
							<p>Send private photos and messages to a friend or group.</p>
							<button className="btn btn-primary">Send Message</button>
						</div>
					</div>
				}
				{
					openinfo &&
					<div className="right detail">
						<div className="info">
							<div>
								<div>
									<img className="avatar" src={user.avatar} alt=""/>
								</div>
								<p>ferdiansyah</p>
							</div>
							<div className="p-2 cursor-pointer" onClick={handleinfo}>
								<ion-icon name="information-circle"></ion-icon>
							</div>
						</div>
						<div className="content">
							<div className="mute">
								<input type="checkbox" id="mute"/>
								<label htmlFor="mute">Mute Messages</label>
							</div>
							<div className="move">
								<div>
									<p>Move to General</p>
									<button className="outline-profile">Move</button>
								</div>
								<p className="text-gray-300">
									ferdiansyah won't know they've been moved. You can move them back to Primary anytime.
								</p>
							</div>
							<div className="member">
								<h5>Members</h5>
								<div>
									{[1,1].map(v => (
										<div onClick={opened} className="item">
											<div>
												<img src={user.avatar} className="avatar" alt=""/>
											</div>
											<div>
												<p>ferdiansyah</p>
												<p>hello ferdiansyah you are the winner</p>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="action">
								<a href="/" className="cursor-pointer text-red-500">Delete Chat</a>
								<a href="/" className="cursor-pointer text-red-500">Block</a>
								<a href="/" className="cursor-pointer text-red-500">Report</a>
							</div>
						</div>
					</div>
				}
			</div>
		</div>
	)
}