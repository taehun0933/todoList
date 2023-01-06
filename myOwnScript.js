// [필터링 구현하기]

// 필터링의 값으로는 all / active / completed 총 세 가지가 가능하다.
// 이를 Header의 상위 컴포넌트인 App.js에서 state로 filter 변수를 선언해 주었다.

// 이후 해당 state 변경 함수를 전달해 주어 Header에서 버튼 클릭 시 filter가 변경되도록 설정.
// 이 filter 변수를 ToDoList 컴포넌트에도 전달해 주어, 삼항연산자(ternary operator)-
// 를 이용하여 filter에 따라 .filter API로 필터링 처리를 해 주었다.
