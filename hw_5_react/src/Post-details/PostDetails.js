import {useEffect, useState} from "react";

export default function PostDetails(props) {
    // console.log(props.location.state)
    let {match: {params: {id}}, location:{state}} = props;

    let [post, setPost] = useState(null);
    useEffect(() => {
        setPost(state);
    }, [id])

    return (
        <div>
            {post && <h1>{post.title}</h1>}
        </div>
    );
}