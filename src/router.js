import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import VideoList from "./components/VideoList";
import RecommendVideo from "./components/RecommendVideo";
import RecommendBook from "./components/RecommendBook";
import BookList from "./components/BookList";

// 라우터 설계
/*

GET : /demo/video/search(GET 요청만 가능)    : 동영상 검색 페이지
GET : /demo/video/list(GET 요청만 가능)    : 추천 동영상 검색 페이지

GET : /demo/book/list                       : 추천 도서 목록 페이지
GET : /demo/book/search/            : 검색 도서 목록 페이지
GET : /demo/book/search/{:isbn}            : 검색 도서 상세 페이지

*/

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "sample",
                element: <p>자식이다.</p>
            }
        ],
        errorElement: <>
            <h1>oops!!!</h1>
        </>
    },
    {
        path: "video",
        element: <Root />,
        children: [
            {
                path: "recommendVideo",
                element: <RecommendVideo />
            },
            {
                path: "searchVideo",
                element: <VideoList />
            }
        ]
    },
    {
        path: "book",
        element: <Root />,
        children: [
            {
                path: "recommendBook",
                element: <RecommendBook />
            },
            {
                path: "searchBook",
                element: <BookList />
            }
        ]
    },
], {
    basename: "/demo"
});

export default router;
