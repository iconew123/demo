import Home from "./Home";

// props ({key - value} 오브젝트 형태)
//  ㄴ 자식 요소가 부모에게 전달하는 정보(값)

function MyComponent({message}){
    return(
        <>
            <h1>Hello World!</h1>
            <p>{message}</p>
            <Home style={{
                "color":"red",
                "backgroundColor": "black",
                "width":"200px",
                "height":"60px",
                "border":"none",
                "borderRadius":"10px",
                "cursor":"pointer"
            }
            }/>
        </>
    );
}
/* 익명함수
const MyComponent = () => (

)
*/
export default MyComponent;