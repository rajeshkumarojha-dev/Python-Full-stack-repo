import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [data, setData] = useState(0)
    const [count, setCount] = useState(100)
    const changeMemo = useMemo( function changeMemo() {

        console.log('Funcion Called')

    },[data])
   
    return (
        <div>
            <h1>{changeMemo}</h1>
            <h1>{data}</h1>
            <button onClick={() => setData(data + 1)}>Update Data</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
        </div>
    )
}

export default UseMemoHook
