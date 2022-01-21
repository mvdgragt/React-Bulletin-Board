import ReactPost from "./ReactPost";

export default function BulletinBoard() {

    const answer1 = () => {
        return (
        <ul>
    <li>React gör det enkelt att återanvända kod och funkionalitet med hjälp av komponenter</li>
    <li>React gör det enklare att bygga dynamiska applikationer</li>
    <li>React lägger fokus på applikations prestanda och hastighet</li>
    </ul>
        )
    }

    const answer2 = () => {
        return (
        <ul>
    <li> En SPA är motsatsen till en Multi Page Applikation (MPA) och är en webb applikation eller webbplats som passar på en enda webbsida med syftet att ge en smidig användarupplevelse, liknande ett datorprogram som körs på användarens egen dator. </li>
        <li>I ett SPA hämtas all nödvändig kod - HTML, JavaScript och CSS - med en enda laddnings åtgärd, eller så laddas de nödvändiga resurserna dynamiskt och läggs till på sidan efter behov med fördel att applikation laddas mycket snabbare.</li>
    
    </ul>
        )
    }


    const answer3 = () => {
        return (
        <ul>
    <li>AngularJS är ett ramverk för att utveckla dynamiska webb appar, medan React är ett javascript-bibliotek som låter dig bygga UI-komponenter.</li>
    <li>Angular JS är baserat på MVC (Model View Controller) medan React är baserat på Virtual DOM.</li>
    <li>Angular är baserat på Typescript och React är baserat på Javascript.</li>
    </ul>
        )
    }

   
  const posts = [
    {
        "id": 1,
        "question": "Vad är tre fördelar med att använda React?",
        "answer": answer1()
    },
    {
        "id": 2,
        "question": "Vad betyder Single Page Application (SPA) och vad skiljer det från en 'vanlig' webbplats?",
        "answer": answer2()
    },
    {
        "id": 3,
        "question": "Nämn tre skillnader mellan React och Angular",
        "answer": answer3()
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
