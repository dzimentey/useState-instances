import {useState} from "react";

export const OnOff = () => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '35px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        paddingLeft: '10px',
        backgroundColor: on ? 'yellowgreen' : 'white',
    }
    const offStyle = {
        width: '35px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        paddingLeft: '10px',
        backgroundColor: on ? 'white' : 'red',
    }
    const lightStyle = {
        display: 'inline-block',
        width: '11px',
        height: '11px',
        border: '1px solid black',
        borderRadius: '50%',
        margin: '0 0 5px 15px',
        verticalAlign: 'bottom',
        backgroundColor: on ? 'yellowgreen' : 'red',
    }
    return (
        <div>
            <div onClick={()=>setOn(true)} style={onStyle}>on</div>
            <div onClick={()=>setOn(false)} style={offStyle}>off</div>
            <div style={lightStyle}></div>
        </div>
    )
}
