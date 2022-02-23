import {
	useNavigate
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
	useDispatch, useSelector, batch
} from 'react-redux'

import { addPostFake, handle } from '@s/post'
import ItemPost from '@c/ItemPost'
import '@style/Home.sass'

export default function Home(){
  const to = useNavigate()
  const post = useSelector((s) => s.post)
  const user = useSelector((s) => s.user)
  const dispatch = useDispatch()
  useEffect(() => {
  	batch(() => {
  		dispatch(handle({
  			name: 'data', value: []
  		}))
	  	for(var i = 0;i < 12; i++){
	  		dispatch(addPostFake({
					_id: crypto.randomUUID(),
					user: {
						name: 'Ferdiansyah'
					},
					text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
					likes: 100
				}))
	  	}
  	})
  }, [])
	return(
		<div className="containers my-4 home">
			<div>
				<section className="grid gap-4">
					{
						post.data.map(v => (
							<ItemPost key={v._id} data={v} />
						))
					}
				</section>
			</div>
			<div>
				<div className="stickys">
					<div className="profile">
						<img src={user.avatar} alt=""/>
						<div>
							<h5>{user.name}</h5>
							<p>{user.fullName}</p>
						</div>
						<div>
							<a href="/">Switch</a>
						</div>
					</div>
					<div className="recommend">
						<div className="text">
							<p>Suggestions For You</p>
							<p>See All</p>
						</div>
						<ul>
						{[1,2,3,4,5].map((v) => (
							<li key={v}>
								<img src={user.avatar} alt=""/>
								<div>
									<a href="/">ferdiansyah0611</a>
									<p>Follows you</p>
								</div>
								<div>
									<a href="/">Follow</a>
								</div>
							</li>
						))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}