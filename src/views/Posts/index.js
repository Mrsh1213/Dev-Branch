import React,{Fragment} from 'react';
import {useState} from "react";
import PostList from "./PostList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MyEditor from './MyEditor';

function Index()
{
  const creatorName="محمد";
  const content1="<p>محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست</p>";
  const content2="<p>محتوای دومین پست محتوای دومین پست من محتوای دومین پست من محتوای دومین پست</p>";
  const[posts,setPosts]=useState(
    [
    {content:content1,title:"عنوان اول",creator:creatorName,picture:1},
    {content:content2,title:"عنوان دوم",creator:creatorName,picture:null},
    {content:content1,title:"عنوان سوم",creator:creatorName,picture:1},
    {content:content2,title:"عنوان چهارم",creator:creatorName,picture:null},
    {content:content1,title:"عنوان پنجم",creator:creatorName,picture:1},
    {content:content2,title:"عنوان ششم",creator:creatorName,picture:null},
    {content:content1,title:"عنوان هفتم",creator:creatorName,picture:1},
    {content:content2,title:"عنوان هشتم",creator:creatorName,picture:null},
    ]
    );



  const createPost = (title,content,picture)=>{ 
        posts.unshift({content:content,title:title,
        creator: creatorName,picture:picture});
        setPosts(posts);  
  }

 
  
  

  return ( <Router>
                <Route exact path="/post" component={() => <PostList posts={posts} />}/>
                <Route path="/post/createpost" component={() => <MyEditor createPost={createPost} />}/>

            </Router>)
}

export default Index;