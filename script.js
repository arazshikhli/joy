const btn=document.querySelector('.btn');
const stopBtn=document.querySelector('.stop')
let video=document.querySelector('.video-cont');
let text=document.querySelector('.text')
let videoItem=document.querySelector('.video-item');
function VideoPlay(){
videoItem.play();
}
btn.addEventListener('click',()=>{
    console.log('clicked')
    if(!video.classList.contains('video-display')|| !text.classList.contains('text-display') ||videoItem.paused){
        video.classList.add('video-display')
        text.classList.add('text-display')
        videoItem.play()
        btn.classList.add('hide-btn')
        stopBtn.classList.remove('hide-stop')
    }
    // else{
    //     video.classList.remove('video-display')
    //     text.classList.remove('text-display')
    //     videoItem.pause()
    // }
})
stopBtn.addEventListener('click',()=>{
    video.classList.remove('video-display')
    text.classList.remove('text-display')
    videoItem.pause()
    stopBtn.classList.add('hide-stop')
    btn.classList.remove('hide-btn')
})