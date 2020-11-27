import Button from "./components/Button";
import InputGroupInLine from "./components/InputGroupInLine";

function App() {
  return (
    <div className="container mt-3">
      <div className="mx-auto" style={{ width: '600px' }}>
        <InputGroupInLine id="nome" textoLabel="Nome:" colLabel="col-sm-2" colInput="col-sm-10" />
        <InputGroupInLine id="email" textoLabel="Email:" colLabel="col-sm-2" colInput="col-sm-10" />
        <InputGroupInLine id="apelido" textoLabel="Apelido:" colLabel="col-sm-2" colInput="col-sm-10" />
        <Button textoBotao="Cadastrar" />
      </div>
    </div>
  );
}

export default App;
