import {useParams,Link} from "react-router-dom";

const PostPage = ({post,handleDelete}) => {
  const {id} = useParams();
  const pst = post.find(pst => (pst.id).toString()=== id)

  return (
    <main className="PostPage">
      <article className="post">
        {pst && 
          <>
            <h2>{pst.title}</h2>
            <p className="postDate">{pst.datetime}</p>
            <p className="postBody">{pst.body}</p>
            <button onClick={()=>handleDelete(pst.id)}>
              Delete Post
            </button>
          </>
        }
        {
          !pst &&
          <>
            <h2>Post not Found</h2>
            <p>Well, that's disappointing...</p>
              <Link to='/'> Visit Our Homepage </Link>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage
