// react component APP 이라고 정의
// JSX >> Javascript Xml 이라고 함
// <MyComponent> 종속 시킴
import BookList from "./components/BookList";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <BookList />
  );
}

export default App;