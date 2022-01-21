import ReactPost from "./ReactPost";

export default function BulletinBoard() {

  const posts = [
    {
        "id": 1,
        "question": "Vad är tre fördelar med att använda React?",
        "answer": "Lorem ipsum..."
    },
    {
        "id": 2,
        "question": "Vad betyder Single Page Application och vad skiljer det från en 'vanlig' webbplats?",
        "answer": "Lorem ipsum..."
    },
    {
        "id": 3,
        "question": "Nämn tre skillnader mellan React och Angular",
        "answer": "Lorem ipsum..."
    }
  ];
   
  return <div>
              <h1>Bulletinboard</h1>
              <hr />
                <div className="post-list">
                    <ul>
                        <h2>Latest Posts</h2>
                        {posts.map((post ,i)=> {
                       return <ReactPost {...post} key={post.id}/>
                      })}
                  </ul>
                  </div>
            </div>
}
