import Rating from './Rating';

function Review({ review }) {
  const { content, score } = review;
  return (
    <div className="bg-yellow-100 my-1 p-1 border border-yellow-400">
      {content}
      <Rating score={score} />
    </div>
  );
}

export default Review;
