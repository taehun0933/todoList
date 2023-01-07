import { createContext, useContext, useEffect, useState } from "react";

// 사용할 컨텍스트 만들기
const DarkModeContext = createContext();

// 위의 컨텍스트를 활용하여, 자식에게 데이터를 전달해 줄 수 있는 Provider(우산) 만들기
// Provider의 value prop으로는, 넘겨 줄 요소들을 '객체의 형태'로 전달해 준다.
export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  useEffect(() => {
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDarkMode);
    updateDarkMode(isDarkMode);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// value값인 darkMode,toggleDarkMode를 가져오는 Hook 정의.
export const useDarkMode = () => useContext(DarkModeContext);

const updateDarkMode = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

// 다크모드 구현 방법 고민
// 1. 컴포넌트의 리턴문 이전에 if문을 통해, darkMode에 따라 두 가지 버전의 리턴문 작성.
// 2. 템플릿 리터럴의 조건문을 통해, darkMode일 경우에 추가로 다크모드 클래스 적용.
// => 더 좋은 방법 : document.documentElement를 통해 최상위 요소인 HTML에 클래스를 추가하여 주고, 해당 클래스 적용 여부에 따라 처리.
