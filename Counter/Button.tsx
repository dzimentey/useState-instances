import React from "react";
type ButtonPropsType = {
    callBack:()=> void
    title: string
    count?: number
}
export const Button = (props: ButtonPropsType) => {
    return(

          <button onClick={props.callBack} disabled={props.count ? props.count >= 5 : false}>{props.title}</button>

    )
}