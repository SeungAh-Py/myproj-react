import Axios from 'axios';
import DebugState from 'components/DebugStates';
import { useEffect, useState } from 'react';

function PageReviewList() {
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    // Promise 객체 ; 어떠한 함수도 Promise 객체로 만들수 있음.
    Axios.get(url)
      .then(({ data }) => {
        console.group('정상 응답');
        console.log(data);
        console.groupEnd();
        setReviewList(data);
      }) // 정상일때 호출(200~300)
      .catch((error) => {
        console.group('에러 응답');
        console.log(error);
        console.groupEnd();
      }); // 비정상일때 호출 (400~)
  };
  return (
    <div>
      <h2>Review List</h2>
      <hr />
      <DebugState reviewList={reviewList} />
    </div>
  );
}

export default PageReviewList;
