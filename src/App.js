import './App.css';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <form>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br></br>
        <label>
          Password:
          <input type="text" name="Password" />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
