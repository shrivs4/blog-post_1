import React from 'react'
import Post from './Post'

const Feed = ({post}) => {
  return (
    <>
      {post.map((pst)=>(
        <Post key={pst.id} pst = {pst}/>
      ))}
    </>
  )
}

export default Feed
