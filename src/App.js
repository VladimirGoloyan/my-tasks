import el from './api/elFunction'

function App() {
  console.log(el('div',{className:'my-div'},["Hi there",{}]))
  
  return (
    <div className="App">
      {el('div',{className:'my-div'},["Hi there"])}
    </div>
  );
}

export default App;
