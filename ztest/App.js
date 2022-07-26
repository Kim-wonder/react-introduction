import React, { useState, useEffect } from "react";
import Child from "./Child";
import Layout from "./Layout"
import App from "../buket/src/App";

function App() {

    //이름을 App.js 즉, 부모한테 받아와서 Child에 보여주고 싶다.
        //name, name을 변경하는 setName = 기본값 " "인 문자열 (없어도 됨. 없으면 undifined 나옴)   
    const [ name, setName ] = useState("");
            //name 을 자식에게 내려주고싶으면 ==>

    useEffect(() => {
        console.log("i am rendered!");
    }, [])

    return (          {/*꼭 name 아니어도 됨 - {무엇}은 꼭 위에 있는 자식에게 주고싶은 것과 같아야 함*/}
        <Layout> {/* ==> 어떤 이름name 으로 {무엇}을 내려줄겁니다.*/}
            <Child name={name} setName={setName}/>
        </Layout>
    );
}


export default App;