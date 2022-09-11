
import './App.css';
import PonerAlarma from './components/PonerAlarma.js';

function App() {
  return (
    <div className="App">
      <section className="container">
         <div id="Clock" className="container__Clock">
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
