import useAxios from 'axios-hooks';
import DebugStates from 'components/DebugStates';
import ItNewsSummary from './ItNewsSummary';

function ItNews() {
  const [{ data: itNewsList, loading, error }] = useAxios(
    'http://localhost:8000/ititems/api/itnews/',
  );
  return (
    <div>
      <h3>IT News 목록을 보여주기</h3>
      {loading && 'Now Loading...'}
      {error && 'An error occurred while loading'}
      {itNewsList &&
        itNewsList.map((itNews) => <ItNewsSummary itNews={itNews} />)}
      <DebugStates itNewsList={itNewsList} loading={loading} error={error} />
    </div>
  );
}

export default ItNews;
