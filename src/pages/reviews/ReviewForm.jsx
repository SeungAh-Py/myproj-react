import Axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DebugState from 'components/DebugStates';

function ReviewForm() {
  const { reviewId } = useParams();
  const { Navigate } = useNavigate();
  const [fieldValues, setFieldValues] = useState({
    content: '',
    score: 5,
  });

  const saveReview = async () => {
    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    try {
      const response = await Axios.post(url, fieldValues);
      console.group('saveRevie');
      console.log(response.data);
      console.group();
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFieldValues((prevFieldValues) => {
      return {
        ...prevFieldValues,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h2>ReviewForm</h2>
      <br />

      <div>
        <div>
          <h2>
            ReviewForm
            {reviewId ? '수정' : '생성'}
          </h2>
          <DebugState reviewId={reviewId} />
          <ReviewForm
            fieldValues={fieldValues}
            handleFieldChange={handleFieldChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            평점
          </label>
          <select
            onChange={handleChange}
            name="score"
            value={fieldValues.score}
          >
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            리뷰
          </label>
          <textarea
            type="text"
            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
            name="content"
            value={fieldValues.content}
          />
        </div>

        <div className="mb-4">
          <button className="shadow border bg-red-100 hover:bg-blue-300 border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight">
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
}
export default ReviewForm;
