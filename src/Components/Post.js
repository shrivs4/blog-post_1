import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({pst}) => {
  return (
    <article className='post'>
      <Link to={`/post/${pst.id}`}>
        <h2>
            {pst.title}
        </h2>
        <p className='postDate'>{pst.datetime}</p>
      </Link>
      <p className='postBody'>
        {
            (pst.body).length <=25
            ? pst.body
            :`${(pst.body).slice(0,25)}....`
        }
      </p>
    </article>
  )
}

export default Post
