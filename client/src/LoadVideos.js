import {useState} from 'react'
import data from './exampleresponse.json'
import '@fortawesome/free-solid-svg-icons'


const LoadVideos = ()=>{
    const [videos,setVideos] = useState(data)

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

return <div className='allVidContainer'>{videos.map((video,index)=>{
    return <div className='vidContainer'>
        <h5 id='vidTitle'>{video.title}</h5>
       
       <div id='votes'> <i class="fas fa-thumbs-up vote" onClick={e=>{incVotes(e,index)}}></i> <h5>{video.rating} votes</h5><i class="fas fa-thumbs-down vote" onClick={e=>{decVotes(e,index)}}></i></div>
        <iframe key={index} className='vid' allowFullScreen src= {`${video.url}`.replace('watch?v=','embed/')} title="YouTube video player" >
            </iframe>
            <div>
            <button className="btn btn-danger" onClick={(e)=>{deleteVideo(e,video.id)}}>Delete</button>   
            </div>         
             </div>
})} </div>


}
export default LoadVideos;