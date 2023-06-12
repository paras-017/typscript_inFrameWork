
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Heading from './components/Heading';
import { Section } from './components/Sections';
import List from './components/List';

function App() {
  const [count, setCount] = useState(0)   
  return (
    <>
    <h1>Hello</h1>
    <Heading title={'paras'}/>
    <Section title={'hello from section'}><h1>hello there</h1></Section>
    <Counter setCount={setCount}>count is {count}</Counter>
    <List items ={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={(data)=>(
    <span>{data}</span>)}/>
    </>
  );
}

export default App;
