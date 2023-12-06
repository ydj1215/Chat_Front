import { createContext, useEffect, useState } from "react";

// 전역 관리 : ContextApi
// 새로운 Context 객체를 생성
// Context 객체에는 Provider와 Consumer라는 두 개의 컴포넌트가 포함된다.
// Provider : Context를 구독하는 컴포넌트들에게 Context의 변화를 알려준다.
// Consumer : Context의 데이터를 사용한다.
export const UserContext = createContext(null);

export const UserStore = (props) => {
  // color, name, 두 가지의 상태를 전역적으로 관리
  // 로컬 저장소에서 값을 꺼내고, 값이 존재하지 않을 때의 기본값을 설정
  const [color, setColor] = useState(
    localStorage.getItem("bgcolor") || "orange"
  );

  const [name, setName] = useState(
    localStorage.getItem("name") || "이름을 입력해주세요."
  );

  // color, name 값이 변경될때마다 로컬 저장소에서도 값을 최신화
  useEffect(() => {
    localStorage.setItem("bgcolor", color);
  }, [color]);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  // <UserContext.Provider> : Context 객체를 생성할 때 함께 생성
  // Context의 값을 결정하고 그 값을 value 속성을 통해 하위 컴포넌트에게 전달한다.
  // 전달된 값은 하위 컴포넌트에서 Context.Consumer 혹은 useContext 훅을 통해서 사용된다.
  return (
    <UserContext.Provider
      value={{
        color,
        setColor,
        name,
        setName,
      }}
    >
      {/* color, setColor, name, setName 이렇게 네 가지의 값을 하위 컴포넌트에서 사용 가능하다. */}
      {props.children}
      {/* props.childern : 리액트에서 부모가 자식 컴포넌트를 렌더링 하는 방식을 의미한다. */}
      {/* 리액트에서 부모 컴포넌트는 자식 컴포넌트에게 props라는 객체를 통해서 데이터를 전달한다. 이러한 props라는 객체에게는 children이라는 속성이 존재한다. 이는 부모 컴포넌트의 <> 와 </1> 태그 사이에 존재하는 파일(.jsx)들을 의미한다.*/}
    </UserContext.Provider>
  );
};
