import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './UseEffectFetch.css';
function UseEffectFetch() {

    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            res => {
                setPost(res.data)
            }
        ).catch(e => {
            console.error(e);
        })
    }, [])
    return (
        <div>
            <h3 className="text-center">useEffect to fetch data in initial render</h3>
            {post.map(obj => (
                <div key={obj.id}>
                    <span className="title">
                    {obj.title}
                    </span>
                    <p className="desc">
                        {obj.body}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default UseEffectFetch
