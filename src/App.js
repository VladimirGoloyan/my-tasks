import myAjax from "./api/myAjax"

function App() {
  myAjax("https://jsonplaceholder.typicode.com/posts/1",{type:"get"})
  .then(data=>data.toUpperCase())
  .then(data=>console.log('data after uppercase',data))
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
