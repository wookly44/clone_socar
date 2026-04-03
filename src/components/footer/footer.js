import './footer.css'
import List from './lists'
import Image from './imgs'
import Fix from './fix'

const footer = ({snss,infos})=>{
    return(
        <footer>
            <div>
                <Image snss={snss}/>
                <List infos={infos}/>
                <div>
                    <div>
                        <p>주소. 제주특별자치도 제주시 연미길 42 (오라삼동)</p>
                        <p>전화. 1661-3315</p>
                        <p>팩스. 02-6969-9333</p>
                    </div>
                    <div>
                        <p>(주)쏘카 통신판매업 <a href="#">사업정보 확인</a></p>
                        <p>신고: 제 2019-제주오라-3호, 사업자등록번호ㅣ 616-81-90529, 대표자: 박재욱</p>
                        <p>© 2024 SOCAR All rights reserved.</p>
                    </div>
                </div>
            </div>
            <Fix/>
        </footer>
    )
}
export default footer;