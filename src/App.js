import PuzzelGame from './сomponents/PuzzelGame/PuzzelGame';

function App() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      <PuzzelGame />
    </div>
  );
}

export default App;
