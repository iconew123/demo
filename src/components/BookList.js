import React, { useEffect, useRef, useState } from 'react';

const BookList = () => {
    const [bookList, setBookList] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState();
    const pageCount = useRef(1);

    const fetchBooks = async () => {
        const response = await fetch(`https://dapi.kakao.com/v2/search/vclip?query=${search}&page=${page}`, {
            method: "GET",
            headers: {
                Authorization: "KakaoAK ${process.env.REACT_APP_API_KEY}"
            }
        });
        const data = await response.json();
        console.log(data);
        pageCount.current = Math.floor(data.meta.pageable_count / 10) + (data.meta.pageable_count % 10 > 0 ? 1 : 0);
        // kakao developer 에서 문서 봐야함 제한이있을수도있음.
        if(pageCount.current > 15){
            pageCount.current = 15;
        }
        setBookList(data.documents);
    };

    const changeSearch = e => {
        console.log(e.target.value);
        if(e.target.value !== ""){
            setSearch(e.target.value);
            setPage(1);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [page, search]);

    return (
        <>
            <h1>영상 검색 목록</h1>
            <input type='text' placeholder='검색어 입력' onChange={changeSearch} />
            <div>
                {bookList.map((book) => (
                        <p>{book.title}</p>
                ))}
            </div>
            <ul>
                {Array.from({ length: pageCount.current }, (_, index) => (
                    <li key={index} onClick={() => setPage(index + 1)}>{index + 1}</li>
                ))}
            </ul>
        </>
    );
};

export default BookList;