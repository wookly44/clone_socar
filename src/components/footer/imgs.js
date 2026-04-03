const image = ({snss})=>{
    return(
        <ul className="snss">
            {snss.map((sns)=><li><a href="/"><img src={sns.img} alt={sns.alt}/></a></li>)}
        </ul>
    )
}
export default image;