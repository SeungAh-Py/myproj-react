import Alert from 'components/Alert';

function Components() {
  return (
    <div>
      <h2 className="text-lg border-l-4 border-red-500 pl-1 mb-2">
        Components
      </h2>
      <h2 className="text-lg border-l-4 border-red-500 pl-1 mb-2">Alerts</h2>
      <Alert type="info" message="info 메세지입니다." />
      <Alert type="success" message="success 메세지입니다." />
      <Alert type="forbid" message="forbid 메세지입니다." />
    </div>
  );
}

export default Components;
