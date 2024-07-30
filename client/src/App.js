function App() {
  let myname="Bethel";
  function test () {
    alert('Button Clicked from ALERT');
  }
  return (
  <div>
    <button onClick={test}>CLICK ME</button>
    <h1 style={{color:"puple"}}> {myname}</h1>
  </div>
  )
}

export default App