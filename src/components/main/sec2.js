const sec2 = ({contents})=>{
    return(
        <ul className="sec2">
            {contents.map((content)=>
                <li>
                    <h3>{content.tit}</h3>
                    <p>{content.txt}</p>
                    <img src={content.img} alt={content.tit}/>
                </li>
            )}
        </ul>
    )
}
export default sec2;