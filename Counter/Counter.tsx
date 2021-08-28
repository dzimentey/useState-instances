import React, {useState} from "react";
import {Display} from "./Display";
import {Button} from "./Button";
import s from './Counter.module.css'
export const Counter = () => {

    const [count, setCount] = useState(0)
    const reset = () => setCount(0)
    const increase = () => setCount(count +1)

        return (
        <div className={s.wrapper}>

          <Display count={count} red={count >= 5}/>
            <div className={s.controls}>
                <Button callBack={reset} title={'reset'}/>
                <Button callBack={increase} title={'incr'} count={count}/>
            </div>

        </div>
    )
}
