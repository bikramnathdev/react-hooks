import axios from 'axios';
import React, {useState, useEffect} from 'react';

function UseEffectFetchDependency() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const getPostDetails = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
            res => {
                setPost(res.data)
            }
        )
        .catch(e => {
            console.error(e);
        })
    }
    useEffect(() => {
        getPostDetails(id);
    }, [id])
    return (
        <div>
            <h4>useEffect depends on the ID of input</h4>
            <input type="number" onChange={(e) => setId(e.target.value)}/>
            <p>{post?.body}</p>
        </div>
    )
}

export default UseEffectFetchDependency
