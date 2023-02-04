
import './App.css';
import './Mystyle.css'

function JSXDemo() {
  let a = 10;
  let b = 20;
  let c = a+b;
  let mycolor = {
    backgroundColor : 'yellow'
  }
  return (
    <div>
      A Value is {a} <br />
      B Value is {b} <br />
      C Value is {c} <br />
      <h1 style={{backgroundColor: 'red'}}>React Js</h1>
      <h2 style={mycolor}>Aksh darji</h2>
      <h3 className='mycolor'>External CSS</h3>
      

    </div>
  );
}

export default JSXDemo;
