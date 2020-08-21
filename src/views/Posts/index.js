import React, {Fragment} from 'react';
import {useState} from "react";
import PostList from "./PostList";
import {
    useParams,
    Switch,
    Route,
} from "react-router-dom";
import MyEditor from './MyEditor';
import PostPage from "./PostPage";
function Index() {
    const creatorName = "محمد";
    const content1 = "<p>محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست محتوای اولین پست</p>";
    const content2 = "<p>محتوای دومین پست محتوای دومین پست من محتوای دومین پست من محتوای دومین پست</p>";
    const [posts, setPosts] = useState(
        [
            {
                content: content1, title: "عنوان اول", creator: creatorName, picture: 1,
                comments: [{
                    creator: "محمد",
                    content: "عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی عالی "
                }, {creator: "رضا", content: "خیلی خوب"}]
            },
            {
                content: content2, title: "عنوان دوم", creator: creatorName, picture: null,
                comments: [{creator: "محمد", content: "عالی"}, {creator: "رضا", content: "خیلی خوب"}]
            },
            {
                content: content1, title: "عنوان سوم", creator: creatorName, picture: 1,
                comments: [{creator: "محمد", content: "عالی"}, {creator: "رضا", content: "خیلی خوب"}]
            },
            {
                content: content2, title: "عنوان چهارم", creator: creatorName, picture: null,
                comments: [{creator: "محمد", content: "عالی"}, {creator: "رضا", content: "خیلی خوب"}]
            },
            {
                content: content1, title: "عنوان پنجم", creator: creatorName, picture: 1,
                comments: [{creator: "محمد", content: "عالی"}, {creator: "رضا", content: "خیلی خوب"}]
            },
            {
                content: content2, title: "عنوان ششم", creator: creatorName, picture: null,
                comments: [{creator: "محمد", content: "عالی"}, {creator: "رضا", content: "خیلی خوب"}]
            },
            {
                content: content1, title: "عنوان هفتم", creator: creatorName, picture: 1,
                comments: [{creator: "محمد", content: "عالی"}, {creator: "رضا", content: "خیلی خوب"}]
            },
            {
                content: content2, title: "عنوان هشتم", creator: creatorName, picture: null,
                comments: [{creator: "محمد", content: "عالی"}, {creator: "رضا", content: "خیلی خوب"}]
            },
        ]
    );


    const createPost = (title, content, picture) => {
        posts.unshift({
            content: content, title: title,
            creator: creatorName, picture: picture
        });
        setPosts(posts);
    }

    const findObj = (title)=>
    {
        let post=posts.find(o => o.title === title);
        return post;
        
    }


    return (<Switch>
        <Route exact path="/dashboard/project/wikiProject" 
        component={() => <PostList posts={posts}/>}/>

        <Route path="/dashboard/project/wikiProject/createPost" 
        component={() => <MyEditor createPost={createPost}/>}/>

        <Route path="/dashboard/project/wikiProject/post/:title" 
        children={<Child findObj={findObj}/>}
        />

    </Switch>)
}

function Child(props)
{
    const {findObj}=props;
    let {title}=useParams();
    let post=findObj(title);
    return <PostPage post={post} />;

}

export default Index;