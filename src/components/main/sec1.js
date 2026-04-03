const sec1 =()=>{
    let imgs = [
        {img: '${process.env.PUBLIC_URL}/assets/main_visual_fullscreen.jpg'}
    ]
    return(
        <div className="sec1" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/main_visual_fullscreen.jpg)`}}>
            <h1>차가 필요한 <br/> 모든 순간, 쏘카</h1>
        </div>
    )
}
export default sec1;