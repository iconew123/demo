import React, { useState } from 'react';

const Home = ({style}) => {
    // State : Component 가 제공하는 상태값 
    //  ㄴ 화면 랜더링에 영향을 끼친다.
    // 랜더를 필요한 부분만 교체해줄 수 있다.
    const [count , setCount] = useState(1);
    console.log(count);

    const countUp = (e) =>{
        // console.log(e.target);
        setCount(count + 1);
    }

    return (
        <>
            <button style={style} onClick={countUp}>{count}</button>
        </>
    );
};

export default Home;