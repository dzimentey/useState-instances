import React from "react";
import s from './Counter.module.css'

type DisplayPropsType = {
    count: number
    red: boolean
}
export const Display = (props: DisplayPropsType) => {
    return (
        <div className={props.red ? s.red : ''}>
            {props.count}
        </div>
    )
}