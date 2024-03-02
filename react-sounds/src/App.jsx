import './App.css';

function App() {
  const audios = {
    E: new Audio(audioE),
    A: new Audio(audioA),
    D: new Audio(audioD),
    G: new Audio(audioG),
    B: new Audio(audioB),
    F: new Audio(audioF),
  }

  function play(acorde){
    audios[acorde].play();
  }
  return (
    <>
    <h1>ACORDES GUITARRA</h1>   
      <div>
        <button className="E" onClick={() => play('E')}> E</button>
        <button className="A" onClick={() => play('A')}> E</button>
        <button className="D" onClick={() => play('D')}> E</button>
        <button className="G" onClick={() => play('G')}> E</button>
        <button className="B" onClick={() => play('B')}> E</button>
        <button className="F" onClick={() => play('F')}> E</button>
      </div>
     </>
  );
}

export default App;
