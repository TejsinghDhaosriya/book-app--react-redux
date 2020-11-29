import React from 'react'
import {useSelector ,useDispatch} from  'react-redux';
import { buyBook } from '../redux';
function HookContainer() {
    const numberOfBooks = useSelector(state=>state.numberOfBooks)
    const dispatch = useDispatch(buyBook);
    return (
        <div>
            <h1>Hook X Con</h1>
           <h1>Number of Books {numberOfBooks}</h1>
           <button onClick={()=>dispatch(buyBook())}>Buy Book</button>
        </div>
    )
}

export default HookContainer
