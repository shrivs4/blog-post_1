import Header from './Components/Header';
import {Route,Routes,useNavigate} from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Components/Home';
import NewPost from './Components/NewPost';
import About from './Components/About';
import Missing from './Components/Missing';
import Footer from './Components/Footer';
import PostPage from './Components/PostPage';
import Layout from './Components/Layout';
import { useEffect, useState } from 'react';
import {format} from 'date-fns';

function App() {
  const [post,setPost] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])

  const [search,setSearch]  =useState("");
  const [searchResults,setSearchResults] = useState([]);
  const [postTitle,setPostTitle] = useState("");
  const [postBody,setPostBody] = useState("");

  const navigation = useNavigate();

  const handleDelete = (id)=>{
    const newPost = post.filter((pst)=>pst.id!==id)
    setPost(newPost)
    navigation("/")
  }

  useEffect(()=>{
    const filterResult = post.filter((result)=> (
    result.body.toLowerCase().includes(search.toLowerCase())
    ||result.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ))
    setSearchResults(filterResult.reverse());
  },[post,search])

  const handleSubmit = (e)=>{
    e.preventDefault();
    const id = post.length?post[post.length-1].id+1:1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id,title:postTitle,datetime,body: postBody};
    const allPost = [...post,newPost]
    console.log(allPost[4]);
    setPost(allPost);
    setPostTitle("");
    setPostBody("");
    navigation("/");
  };

  return (
      <Routes>
        <Route path='/' element={<Layout
          title = "React JS Blog"
          search = {search}
          setSearch = {setSearch}
        />}>
      <Route index element={<Home 
      post = {searchResults}
      />}/>
      <Route path='post'>
      <Route index element = {<NewPost 
      postTitle = {postTitle}
      setPostTitle = {setPostTitle}
      postBody = {postBody}
      setPostBody = {setPostBody}
      handleSubmit = {handleSubmit}
      />} />
      <Route path='/post/:id' element={<PostPage 
      post={post}
      handleDelete = {handleDelete}
      />}/>
      </Route>
      <Route path="/about" element = {<About />} />
      <Route path = "*" element = {<Missing/>}/>
      </Route>
      </Routes>
  );
}

export default App;
