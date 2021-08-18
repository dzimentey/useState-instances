import React from "react";
import s from './Counter.module.css'
type ButtonPropsType = {
    callBack:()=> void
    title: string
    count?: number
}
export const Button = (props: ButtonPropsType) => {
    return(

          <button className={s.button} onClick={props.callBack} disabled={props.count ? props.count >= 5 : false}>{props.title}</button>

    )
}
