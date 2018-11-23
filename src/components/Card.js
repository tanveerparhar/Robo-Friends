import React from 'react';
const Card = ({id,name,email})=>
{
	return(
	<div className = 'tc dib br2 ma3 pa3 grow bw2 shadow-5'>
	<img alt='robots' 
	src={`https://robohash.org/${id}?200x200`}/>
	<div>
	<h1 className='f3'>{name}</h1>
	<p>{email}</p>
	</div>
	</div>
	);
}
export default Card;