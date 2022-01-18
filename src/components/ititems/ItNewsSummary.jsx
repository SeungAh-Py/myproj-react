import { Link } from 'react-router-dom';

function ItNewsSummary({ itNews }) {
  return (
    <div>
      {/* SPA : React에서는 <a>로 링크를 걸지 X. Link 라는 리액트 컴포넌트로 구현. Single Page Application  */}
      요약 : <Link to={`/ititems/${itNews.id}/`}>{itNews.name}</Link>
    </div>
  );
}

export default ItNewsSummary;
