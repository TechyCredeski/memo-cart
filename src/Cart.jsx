import { useContext } from 'react';
import { Cartcontext } from './Context';
import './product.css'

export default function Cart() {
const Globalstate = useContext(Cartcontext);
const state = Globalstate.state;
const dispatch = Globalstate.dispatch;



return (
<div>
    <h1 className='crtTitle'>Cart</h1>


</div>
);
}


