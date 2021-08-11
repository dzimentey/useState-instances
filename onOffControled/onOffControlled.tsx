

type OnOffControlledType ={
    on: boolean
    onChange: (on: boolean) => void
}
export const OnOffControlled = (props: OnOffControlledType) => {


    const onStyle = {
        width: '35px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        paddingLeft: '10px',
        backgroundColor: props.on ? 'yellowgreen' : 'white',
    }
    const offStyle = {
        width: '35px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        paddingLeft: '10px',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const lightStyle = {
        display: 'inline-block',
        width: '11px',
        height: '11px',
        border: '1px solid black',
        borderRadius: '50%',
        margin: '0 0 5px 15px',
        verticalAlign: 'bottom',
        backgroundColor: props.on ? 'yellowgreen' : 'red',
    }
    return (
        <div>
            <div onClick={()=>props.onChange(true)} style={onStyle}>on</div>
        <div onClick={()=>props.onChange(false)} style={offStyle}>off</div>
        <div style={lightStyle}></div>
        </div>
)
}