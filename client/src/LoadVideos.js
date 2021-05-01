import {useState,useEffect} from 'react'
// import data from './exampleresponse.json'
import '@fortawesome/free-solid-svg-icons'
import YoutubeVideo from './YoutubeVideo';


const LoadVideos = ()=>{
    const [videos,setVideos] = useState([])

    useEffect(() => {
      fetch('https://video-rec.herokuapp.com/')
          .then(res => res.json())
          .then(data => setVideos(data))
      },[]);
  

function deleteVideo(e,id){
    e.preventDefault();
    const filtered = videos.filter(video=>{return video.id!==id})
    setVideos(filtered)
    }

function incVotes(e,index){
    e.preventDefault();
const newVideos = [...videos];
newVideos[index].rating++;
setVideos(newVideos)
}    

function decVotes(e,index){
    e.preventDefault();
    const newVideos =[...videos];
    newVideos[index].rating--;
    setVideos(newVideos);
}

function addVideo(e){
e.preventDefault();


}

return(
<div>
<form id='form' onSubmit={e=>addVideo(e)}>
<div>
<label>Title</label>
    <input className='input' name='title' type='text' required/>   
</div>
<div>
<label>URL</label>
    <input className='input' name='url' type='text' required/>
</div>
<div>
<button className="btn btn-danger" type='submit'>ADD</button>

</div>
 </form>

 

<div className='allVidContainer'>

    {videos.map((video,index)=>{
    return <div key={index} className='vidContainer'>
        <h5 id='vidTitle'>{video.title}</h5>
       
       <div id='votes'> <i className="fas fa-thumbs-up vote" onClick={e=>{incVotes(e,index)}}></i> <h5>{video.rating} votes</h5><i className="fas fa-thumbs-down vote" onClick={e=>{decVotes(e,index)}}></i></div>
<YoutubeVideo video={video}/>

       {/* <iframe className='vid' allowFullScreen src= {`${video.url}`.replace('watch?v=','embed/')} title="YouTube video player" >
</iframe> */}
            <div>
            <button className="btn btn-danger" onClick={(e)=>{deleteVideo(e,video.id)}}>Delete</button>   
            </div>         
             </div>
})} 

</div>
</div>
)
}

export default LoadVideos;