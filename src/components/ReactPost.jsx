import { useState } from 'react'
import PostLiked
 from './PostLiked'
// styles
import './ReactPost.css'


export default function ReactPost({question,answer}) {

const [like,setLike] = useState(false)

  return (
  
<li>
    <h3>{question}</h3>
    <p>{answer}</p>
    {!like ? <button onClick={() => setLike(true)}><i class="ri-thumb-up-line"></i> Like</button> : <PostLiked />}

</li>
)

}
