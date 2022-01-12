import logo from './logo.svg';
import './App.css';
import FormInput from './components/form/form-input.component';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('')
  const [outputValue, setOutputValue] = useState('')

  const handleChange = (event) => {
    const value = event.target.value
    setInputValue(value)

    const tempArray = value.split(',')
    const newArray = tempArray.map(val => val * 2)

    setOutputValue(newArray.join(','))
  }

  return (
    <div className="App">
      <FormInput onChange={handleChange} value={inputValue} title="Input" subTitle="Array" />
      <FormInput value={outputValue} title="Output" subTitle="Double" />
    </div>
  );
}
export default App;
