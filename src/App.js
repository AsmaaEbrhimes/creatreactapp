import React, {useState,useEffect} from "react";
import './style.css'
import { Person } from './data'
import Datacount from './components/Datacount'
import Datalist from './components/Datalist'
import DataAction from './components/DataAction'


const App = () => {
    const [state, setstate] = useState(Person)


    useEffect(() => {
        setstate([])
    }, [])
    const deleteData = () => {
        setstate([])
    }

    const viweData = () => {
        setstate(Person)
    }

    return (
        <>
            <div class="container">
                <Datacount Person={state} />
                <Datalist Person={state} />
                <DataAction ondeleteData={deleteData} onviweData={viweData} />
            </div>
        </>
    )
}
export default App;