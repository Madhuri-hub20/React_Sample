import { ConfigureStore } from '@reduxjs/toolkit';
import CounterReducer from '../src/Components/Redux/CounterSlice'

export default ConfigureStore(

    {
        reducer: {
            counter: CounterReducer
        },

    }
)