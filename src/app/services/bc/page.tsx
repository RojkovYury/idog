'use client'

import { useState, useEffect } from "react";
import { Switch, Divider, Button } from '@mui/material';

/*
pIn  - есть ли перенос из предыдущего разряда?
pOut - добавить перенос в следующий разряд
Summ - сумма двуч цифр(!) с учетом переноса

a b pIn => Summ pOut 

0 0 0 => 0 0
0 1 0 => 1 0
1 0 0 => 1 0
1 1 0 => 0 1
0 0 1 => 1 0
0 1 1 => 0 1
1 0 1 => 0 1
1 1 1 => 1 1 
*/

export default function Bc() {
  // x + y = z
  const [x, setX] = useState([false, false, false, false, false, false, false, false]);
  const [y, setY] = useState([false, false, false, false, false, false, false, false]);
  const [z, setZ] = useState([false, false, false, false, false, false, false, false]);
  const [x10, setX10] = useState('');
  const [y10, setY10] = useState('');
  const [z10, setZ10] = useState('');

  useEffect(() => {
    let pIn = false
    for (let i = 0; i < 8; i++) {
      const pOut = (x[i] && y[i]) || (x[i] && pIn) || (y[i] && pIn)
      const Summ = (x[i] || y[i] || pIn) && !pOut || (x[i] && y[i] && pIn)
      pOut ? (pIn = true) : (pIn = false)
      setZ((prevState => {
        const updatedZ = [...prevState];
        Summ ? (updatedZ[i] = true) : (updatedZ[i] = false);
        return updatedZ;
      }))
    }
  }, [x, y]);

  useEffect(() => {
    setX10('');
    setY10('');
    setZ10('');
    for (let i = 0; i < 8; i++) {
      let stringX = x[i] ? '1' : '0'
      let stringY = y[i] ? '1' : '0'
      let stringZ = z[i] ? '1' : '0'
      setX10((prevState) => prevState + stringX)
      setY10((prevState) => prevState + stringY)
      setZ10((prevState) => prevState + stringZ)
    }
    setX10(prevState => prevState.split("").reverse().join(""));
    setY10(prevState => prevState.split("").reverse().join(""));
    setZ10(prevState => prevState.split("").reverse().join(""));
  }, [x, y, z]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ font: 'menu', fontSize: '24px', display: 'flex', flexDirection: 'row-reverse', marginTop: '30px' }}>
        {x.map((_, index) => {
          return(    
            <div 
              key={index}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}
            >
              <div>{x[index] ? '1' : '0'}</div>
              <Switch 
                checked={ x[index] }
                onChange={() => setX((prevState => {
                  const updatedX = [...prevState];
                  x[index] ? updatedX[index] = false : updatedX[index] = true;
                  return updatedX;
                }))}
              />
            </div>
          )
        })}
      </div>

      <div style={{ font: 'menu', fontSize: '24px', display: 'flex', flexDirection: 'row-reverse', marginTop: '30px' }}>
        {y.map((_, index) => {
          return(    
            <div 
              key={index}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}
            >
              <div>{ y[index] ? '1' : '0' }</div>
              <Switch 
                checked={y[index]}
                onChange={() => setY((prevState => {
                  const updatedY = [...prevState];
                  y[index] ? updatedY[index] = false : updatedY[index] = true;
                  return updatedY;
                }))}
              />
            </div>
          )
        })}
      </div>

      <Divider />

      <div style={{ font: 'menu', fontSize: '24px', display: 'flex', flexDirection: 'row-reverse', marginTop: '30px' }}>
        {z.map((_, index) => {
          return(    
            <div 
              key={index}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'  }}
            >
              <div>{ z[index] ? '1' : '0' }</div>
              <Switch 
                checked={z[index]}
                disabled
              />
            </div>
          )
        })}
      </div>

      <Button 
        onClick={() => {
          setX([false, false, false, false, false, false, false, false]);
          setY([false, false, false, false, false, false, false, false]);
        }}
        variant='contained'
        sx={{ marginTop: '30px', width: '120px' }}
      >
        reset
      </Button>

      <div style={{ font: 'menu', fontSize: '18px', marginTop: '30px' }}>
        {x10} + {y10} = {z10}
      </div>

      <div style={{ font: 'menu', fontSize: '18px', marginTop: '8px' }}>
        {parseInt(x10, 2)} + {parseInt(y10, 2)} = {Number(parseInt(x10, 2)) + Number(parseInt(y10, 2))}
      </div>

    </div>
  )
}

/*
const useSummator = (a: boolean, b: boolean, pIn: boolean) => {

  if ((!a && !b) && !pIn) { return [ false, false ] }
  if ((!a || !b) && !pIn) { return [ true,  false ] }
  if (( a &&  b) && !pIn) { return [ false, true  ] }
  if ((!a && !b) &&  pIn) { return [ true,  false ] }
  if ((!a || !b) &&  pIn) { return [ false, true  ] }
  if (( a &&  b) &&  pIn) { return [ true,  true  ] }

  // or

  const pOut = (a && b) || (a && pIn) || (b && pIn)
  const Summ = (a || b || pIn) && !pOut || (a && b && pIn)
  return [Summ, pOut]
}

  console.log(
                                      // a b pIn => S pOut 
    useSummator(false, false, false), // 0 0 0 => 0 0
    useSummator(false, true, false),  // 0 1 0 => 1 0
    useSummator(true, false, false),  // 1 0 0 => 1 0
    useSummator(true, true, false),   // 1 1 0 => 0 1

    useSummator(false, false, true),  // 0 0 1 => 1 0
    useSummator(false, true, true),   // 0 1 1 => 0 1
    useSummator(true, false, true),   // 1 0 1 => 0 1
    useSummator(true, true, true),    // 1 1 1 => 1 1
  );

*/