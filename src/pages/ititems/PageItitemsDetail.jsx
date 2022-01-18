import ItNewsDetail from 'components/ititems/ItNewsDetail';
import { useParams } from 'react-router-dom';

function PageItitemsDetail() {
  const { itNewsId } = useParams();
  return (
    <div>
      <h2>제품 설명#{itNewsId} 보여주기</h2>
      <ItNewsDetail itNewsId={itNewsId} />
    </div>
  );
}

export default PageItitemsDetail;
