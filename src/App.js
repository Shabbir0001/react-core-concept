import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import './App.css';

function App() {
var style = {
  color: "red",
  backgroundColor: "yellow"
}
const nayoks = ["Jashim", "Manna", "Shabbir", "Helal", "Akash"];
const products = [
  {name: "Photoshop", price: "$90.99"}, 
  {name: "Illustrator", price: "$60.99"},
  {name: "PDF reader", price: "$00.00"},
  {name: "Powerpoint", price: "$40.00"}
];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1 style={style}>Hello React</h1>
       <Counter></Counter>
       <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
       {
         products.map(product => <Product product={product}></Product>)
       }   
       <Product product={products[0]}></Product>     
       <Product product={products[1]}></Product>

       <Person name="Shabbir" nayika="Sanjida"></Person>
       <Person name="Helal" nayika="Megha"></Person>
       <Person name="Nishad" nayika="Noirita"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid red",
    margin: "10px"
  }
  return(
   <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of: {props.nayika}</h3>
   </div>
  )
}

function Product(props){
  const productStyle = {
        border: "1px solid gray",
        borderRadius: "5px",
        backgroundColor: "lightgray",
        height: "200px",
        width: "200px",
        float: "left",
        margin: "10px"
  }
  const {name, price} = props.product;
  return(
    <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  // const handleIncrease = ()=> {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count - 1)}>Decreasae</button>
      <button onClick={()=> setCount(count +1)}>Increase</button>
    </div>
  )
}
function Users (){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic User{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
