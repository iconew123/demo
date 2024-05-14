// react component APP 이라고 정의
// JSX >> Javascript Xml 이라고 함
// <MyComponent> 종속 시킴
import { RouterProvider } from "react-router-dom";
//import BookList from "./components/BookList";
//import MyComponent from "./components/MyComponent";
import router from "./router";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;