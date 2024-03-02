import './App.css';

function App() {

  const audios = {
    E: new Audio(audios),
    A: new Audio(audios),
    D: new Audio(audios),
    G: new Audio(audios),
    B: new Audio(audios),
    F: new Audio(audios),
  }

  function play(acorde){
    audios[acorde].play();
  }

  return (
    <>
    <h1>ACORDES GUITARRA</h1>   
      <div>
        <button className="E" onClick={() => play('E')}> E</button>
        <button className="A" onClick={() => play('A')}> A</button>
        <button className="D" onClick={() => play('D')}> D</button>
        <button className="G" onClick={() => play('G')}> G</button>
        <button className="B" onClick={() => play('B')}> B</button>
        <button className="F" onClick={() => play('F')}> F</button>
      </div>
     </>
  );
}

export default App;
