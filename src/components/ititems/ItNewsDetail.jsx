import useAxios from 'axios-hooks';

function ItNewsDetail({ itNewsId }) {
  const [{ data: itNewsList, loading, error }] = useAxios(
    `http://localhost:8000/ititems/api/itnews/${itNewsId}`,
  );
  return (
    <div>
      {loading && 'loading...'}
      {error && '에러가 발생했습니다.'}
      <h3>{itNewsList.title}</h3>
      <div>{itNewsList.content}</div>
    </div>
  );
}

export default ItNewsDetail;
