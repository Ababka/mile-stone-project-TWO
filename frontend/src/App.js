// IMPORTS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockList from './components/StockList';
import AddNewStockModal from './components/AddNewStockModal';
import PolygonAPI from './components/polygonAPI/PolygonAPI';



// FUNCTIONAL COMPONENT
function App() {
  // VANILLA JS SECTION

  // JSX SECTION
  return (
    <div className="App">
      
      <div style={{color: 'red'}} class="dis">
        <h5 style={{marginBottom: '0px', paddingBottom: '0px'}}>Disclaimer:</h5>
        <p style={{fontStyle: 'italic'}}>This is just a project to show some fullstack development features.
          This should not be used as a way to trade stocks or as advice on trading.</p>
      </div>


      <AddNewStockModal />

      <StockList />

      <PolygonAPI />

    </div>
  );
}


export default App;
