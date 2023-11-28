//import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  //js code
  const [principle, setprinciple] = useState(0);
  const [interest, setinterest] = useState(0);
  const [rate, setrate] = useState(0);
  const [year, setyear] = useState(0);
  const [isprinciple, setisprinciple] = useState(true);
  const [israte, setisrate] = useState(true);
  const [isyear,setisyear]=useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("====principle amount=========");
    console.log(principle);
    console.log("=====rate==========");
    console.log(rate);
    console.log("===========year==========");
    console.log(year);
    let result = principle * year * rate / 100;
    console.log(result);
    setinterest(result);
  }
  function clearvalue() {
    setprinciple(0);
    setinterest(0);
    setrate(0);
    setyear(0);
  }
  const validate = (e) => {
    const { value, name } = e.target;
    console.log(name);
    // regular expression:to check whetherv a given string has perticular pattern
    // should have forward slash at the beginning and end
    // start of the expression is indicated by ^ (raised)
    // ending of the expression is indicated by $
    // if it match,we get array as return else null
    // double negation is used for convert regular expression to boolean value
    if (!!value.match(/^[0-9]+$/)) {
      if (name === 'principle') {
        setprinciple(value);
        setisprinciple(true)
      }
      else if (name === 'rate') {
        setrate(value);
        setisrate(true);
      }
      else if (name === 'year') {
        setyear(value);
        setisyear(true);
      }
    }
    else {
      if (name === 'principle') {
        setprinciple(value);
        setisprinciple(false)
      }
      else if (name === 'rate') {
        setrate(value);
        setisrate(false);
      }
      else if (name === 'year') {
        setyear(value);
        setisyear(false);
      }
    }
  }
    return (
      <div className='d-flex justify-content-center align-items-center w-100 mt-5'
        style={{ height: "70vh" }}>
        <div style={{ width: "500px" }} className='bg-light p-5 rounded'>
          <h3>simple interest</h3>
          <p>calculate your simple interest easily</p>
          <div style={{ height: "150px" }} className='flex-column mt-3 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
            <h1>{'\u20B9'}{interest}</h1>
            <p>total simple interest</p>
          </div>
          <form action="" className='mt-3' onSubmit={(e) => handleSubmit(e)}>
            <div className='mb-3'>
              <TextField name="principle" id="outlined-basic" label="principle amount" variant="outlined" className='w-100' value={principle}
                onChange={(e) => validate(e)} />
            </div>
            {!isprinciple &&
              <div>
                <p className='text-danger'>invalid input</p>
              </div>}
            <div className='mt-3'>
              <TextField name='rate' id="outlined-basic" label="rate of interest (pa)%" variant="outlined" className='w-100' value={rate}
               onChange={(e) => validate(e)} />
            </div>
            {!israte &&
              <div>
                <p className='text-danger'>invalid input</p>
              </div>}
             <div className='mt-3'>
              <TextField name='year' id="outlined-basic" label="year(Yr)" variant="outlined" className='w-100' value={year}
               onChange={(e) => validate(e)} />
            </div> 
            {!isyear &&
              <div>
                <p className='text-danger'>invalid input</p>
              </div>}         
            <div className='mt-3'>
              <Stack direction="row" spacing={2}>
                <Button disabled={!isprinciple || !israte || !isyear} style={{ height: "50px", width: "200px" }} variant="contained" className='bg-success' type='submit'>Calculate</Button>
                <Button style={{ height: "50px", width: "200px" }} variant="contained" className='bg-light text-primary' onClick={clearvalue}>Reset</Button>

              </Stack>

            </div>
          </form>
        </div>
      </div>
    );
  }

  export default App;
