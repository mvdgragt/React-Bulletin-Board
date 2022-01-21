import { useState } from 'react'
import PostLiked
 from './PostLiked'
// styles
import './ReactPost.css'


export default function ReactPost({question,answer}) {

const [like,setLike] = useState(false)

  return (
  
<li className="posts d-grid gap-2" >
    <h3>{question}</h3>
    <hr />
    <p>{answer}</p>
    {!like ? <button className="btn btn-primary" type="button" onClick={() => setLike(true)}><i class="ri-thumb-up-line"></i> Like</button> : <PostLiked />}

</li>
)

}
