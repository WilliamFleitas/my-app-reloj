
import './App.css';
import PonerAlarma from './components/PonerAlarma.js';
import Reloj from './components/Reloj';
function App() {
  return (
    <div className="App">
      <section className="container">
         <div id="Clock" className="container__Clock">
          <Reloj/>
          </div>
         <div>
          <PonerAlarma/>
         </div>
      </section>
    </div>
  );
}
// 
export default App;
