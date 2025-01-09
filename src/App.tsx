import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="app">
      <ScoreBoard score={score} />
      <GameBoard />
      <Controls onMove={(direction) => console.log(direction)} />
    </div>
  );
}

export default App;