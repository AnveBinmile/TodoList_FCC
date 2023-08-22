import React from 'react';
import './App.css';


let name:string;
let age:number;
let isStudent:boolean|string;
let hobbies:number[];
let role:[number,string];

// let printName:Function;

role=[5,'Anvesha'];



type X={
  a:string;
  b:number;
};

type Y = X | {
  c:string;
  d:number;
}

let y: Y={
  a:'Alice',
  b:32,
}

interface Person extends X{
  name:string;
  age?:number; //Optional property
}



let person:Person={
  name:'Anvesha',
  age:22,
  a:'Alice',
  b:32,
};


let lotsOfPeople : Person[];

let printName:(name:string)=>void=(name)=>{
  console.log(name);
  console.log(person);
};

// function printName(name:string){
//     console.log(name);
// }


printName('Anvesha');


function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

