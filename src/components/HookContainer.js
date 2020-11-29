import React,{useState} from 'react'
import {useSelector ,useDispatch} from  'react-redux';
import { buyBook } from '../redux';
function HookContainer() {
    const [number,setNumber] =useState(1)
    const numberOfBooks = useSelector(state=>state.numberOfBooks)
    const dispatch = useDispatch(buyBook);
    return (
        <div>
            <h1>Hook X Con</h1>
           <h1>Number of Books {numberOfBooks}</h1>
           <input type="text " value={number} onChange={e=>setNumber(e.target.value)}/>
           <button onClick={()=>dispatch(buyBook(number))}>Buy Book</button>
        </div>
    )
}

export default HookContainer
