import Button from "./components/Button";
import InputGroupInLine from "./components/InputGroupInLine";
import InputGroup from "./components/InputGroup";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div className="container mt-3">
      <div className="mx-auto" style={{ width: '600px' }}>
        <InputGroup tipo="text" simbolo="fas fa-user-injured" />
        <InputGroup tipo="date" simbolo="far fa-calendar-alt"/>
        <InputGroupInLine tipo="text" id="nome" textoLabel="Nome:" colLabel="col-sm-2" colInput="col-sm-10" />
        <InputGroupInLine tipo="email" id="email" textoLabel="Email:" colLabel="col-sm-2" colInput="col-sm-10" />
        <InputGroupInLine tipo="date" id="dtanascimento" textoLabel="Data Nascimento:" colLabel="col-sm-2" colInput="col-sm-10" />
        <TextArea id="comentario" textoLabel="Comentário:" colLabel="col-sm-2" colInput="col-sm-10"/>
        <Button textoBotao="Cadastrar" />
      </div>
    </div>
  );
}

export default App;
