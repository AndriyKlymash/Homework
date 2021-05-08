import {useEffect, useState} from "react";
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value]);
            });
    }, [])
    const searchPost = (id) => {
        let findedPost = posts.find(value => value.id===id);
        setSinglePost(findedPost);
    };


    return (
        <div className='main-box'>
            <div className={'posts-box'}>
            {
                posts.map((value) => <Post
                    key={value.id}
                    item={value}
                    searchPost={searchPost}
                />)
            }
            </div>
            <div className={'single-post-box'}>
                {
                    singlePost&&<h2>Title: {singlePost.title}</h2>
                }
            </div>
        </div>
    );
}