import React, { useState, useCallback } from "react";






                    //props 값을 전달받아 만든 Child 함수
export default function Child (props) {

        //[스테이트, 스테이트를 변경하는 셋스테이트] 이건 한 묶음 = useState(초기값);       
    const [count, setCount] = useState (0);
        //[현상태 state, 입력값 useState] = useState(초기값0);
    const [hobbyList, setHobbyList] = useState ([]);
    const [hobby, setHobby] = useState ("");

    //props 구조 분해 할당
    const {name, setName} = props;
    //이러면 아래 {props.name} 아니고 {name} 만 가져와도 됨.

    console.log(props,"props") //{name: '', setName: f(함수)}, 'props'

    const onSubmitHandler = (e) => {
        //리스트에 추가하기~!

    }


    const deleteHobby = (idx) => {
        //리스트에서 삭제하기

    }

    
    const handleChange = useCallback ( (e) => {
        setHobby ( e.target.value );
    
    },[])

    //setCount 카운트를 변경하는 함수를 가져와서 
    const increasrCountHandler = () => {
        setCount ( count => count +1 );
    }           //기존 카운트에서 1을 더해주세요 
            //setState(count + 1)
            //setState(count + 1)
            //setState(count + 1)
            //setState(count => count + 1)
            //setState(count => count + 1)
            //setState(count => count + 1)


    return { 
        <React.Fragment>

            <h2>내 이름은 {props.name} 입니다.</h2>
            <button onClick={() => props.setName(" ")} >이름 바꾸기</button>
            



            <h2>나의 취미 리스트는...⭐️</h2>

            <form onSubmit={onSubmitHandler}>
                <input type={"text"} onChange={handleChange} value={hobby}/>
                <button>취미 추가</button>
            </form>


            <div>
                {
                    hobbyList.map((hobby, idx) => {
                        return (
                            <div key={idx}>
                                {hobby}
                                <span style={{cursor: "pointer"}} onClick={() => deleteHobby(idx)}>
                                    삭제
                                </span>
                            </div>
                        )
                    })
                }
            </div>


            <h2>현재 이해 한 A반 학생의 숫자</h2>
            <div> {count}명</div>

            //button 버튼을 onClick 클릭 했을 때 발생하는 이벤트를 정의한 함수 
            //increseCountHandler 에 함수를 하나 달았다(count를 증가시키는 함수)
            <button onClick = {increaseCountHandler}>이해했어요</button>

        </React.Fragment>        
    }
}