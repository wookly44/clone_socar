const lists = ({infos})=>{
    return(
        <ul className="infos">
            {infos.map((info)=><li><a href="#">{info.txt}</a></li>)}
        </ul>
    )
}
export default lists;