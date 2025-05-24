import CitaForm from './components/CitaForm';
import CitaList from './components/CitaList';
import EspecialidadList from './components/EspecialidadList';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Gestión de Citas</h1>
      <CitaForm />
      <hr />
      <CitaList />
      <hr />
      <EspecialidadList />
    </div>
  );
}

export default App;
