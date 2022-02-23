import '@style/component/ItemPost.sass'
import React, {
	useState, useCallback
} from 'react'
import {
	useDispatch, useSelector
} from 'react-redux'
import {
	Link
} from 'react-router-dom'
import {opendialog} from '@s/app'

export default function ItemPost({data, dialog}) {
	const dispatch = useDispatch()
	const user = useSelector((s) => s.user)
	const [input, setinput] = useState('')
	const [like, setlike] = useState(false)
	const [saved, setsaved] = useState(false)
	const [comment, setcomment] = useState([
		{
			_id: crypto.randomUUID(),
			user: {
				name: 'ferdiansyah'
			},
			text: 'hi, i comment it'
		}
	])
	const onlike = e => {
		e.preventDefault()
		setlike(!like)
	}
	const onsaved = e => {
		e.preventDefault()
		setsaved(!saved)
	}
	const openedDialog = useCallback(() => dispatch(opendialog()), [])
	const savecomment = (e) => {
		e.preventDefault()
		setcomment([
			{
				_id: crypto.randomUUID(),
				user: {
					name: 'ferdiansyah'
				},
				text: input
			},
			...comment
		])
		setinput('')
	}
	return(
		<div className="post-item">
			<div className="profile">
				<div>
					<img src={user.avatar} className="avatar" alt="avatar"/>
					<Link to={"/profile/" + user.name}>{user.name}</Link>
				</div>
				<div>
					<button className="relative cursor-pointer drop">
						<ion-icon name="ellipsis-horizontal-outline"></ion-icon>
						<div className="dropdown icons text-sm" style={{minWidth: '200px'}}>
							<a href="/" className="text-red-500">Report</a>
							<a href="/" className="text-red-500">Unfollow</a>
							<a className="cursor-pointer" onClick={openedDialog}>Go to post</a>
							<a href="/">Tagged accounts</a>
							<a href="/">Share to...</a>
							<a href="/">Copy link</a>
							<a href="/">Embed</a>
						</div>
					</button>
				</div>
			</div>
			<div>
				{!dialog && <img src="https://images.unsplash.com/photo-1640622299541-8c8ab8a098f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>}
			</div>
			{
				dialog &&
				<div className="comment">
					{comment.map(v => (
						<div>
							<div>
								<img className="avatar" src={user.avatar} alt=""/>
							</div>
							<div>
								<p>
									<b>{user.name}</b>
									<span className="ml-1">{v.text}</span>
								</p>
							</div>
						</div>
					))}
				</div>
			}
			<div className="icon">
				<div>
					<a href="/" onClick={onlike}>
						<ion-icon style={like ? {color: 'red'} : {}} name={like ? "heart":"heart-outline"}></ion-icon>
					</a>
					<a className="cursor-pointer" onClick={openedDialog}>
						<ion-icon name="chatbubbles-outline"></ion-icon>
					</a>
					<a href="/">
						<ion-icon name="send-outline"></ion-icon>
					</a>
				</div>
				<div>
					<a href="/" onClick={onsaved}>
						<ion-icon name={saved ? "bookmark":"bookmark-outline"}></ion-icon>
					</a>
				</div>
			</div>
			<div className="description">
				<a href="/">{data?.likes || 0} Likes</a>
				<p className="">
					<b>{data?.user?.name}</b>
					<span className="ml-1">{data?.text}</span>
				</p>
				<p className="time">17 HOURS AGO</p>
			</div>
			<form onSubmit={savecomment} className="sticker">
				<a href="/">
					<ion-icon name="happy-outline"></ion-icon>
				</a>
				<input value={input} onChange={(e) => setinput(e.target.value)} type="text" placeholder="Add a comment..." />
			</form>
		</div>
	)
}