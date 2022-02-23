import '@style/component/DialogPost.sass'
import React, {
	useEffect
} from 'react'
import {
	useDispatch, useSelector
} from 'react-redux'
import {
	Link
} from 'react-router-dom'
import ItemPost from './ItemPost'
import {closedialog} from '@s/app'

export default function DialogPost() {
	const dispatch = useDispatch()
	const post = useSelector((s) => s.post.data)
	useEffect(() => {
		document.body.style.overflow = 'hidden'
		return() => {
			document.body.style.overflow = 'auto'
		}
	}, [])
	return(
		<>
			<div className="dialog-post">
				<div>
					<div className="img">
						<img src="https://images.unsplash.com/photo-1640622299541-8c8ab8a098f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
					</div>
					<ItemPost dialog={true} data={post[0]}/>
				</div>
			</div>
			<a onClick={() => dispatch(closedialog())} className="closed-dialog">
				<ion-icon name="close-outline"></ion-icon>
			</a>
		</>
	)
}