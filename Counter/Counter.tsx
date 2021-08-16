import React, {useState} from "react";
import {Display} from "./Display";
import {Button} from "./Button";

export const Counter = () => {

    const [count, setCount] = useState(0)
    const reset = () => setCount(0)
    const increase = () => setCount(count +1)

        return (
        <div>

          <Display count={count} red={count >= 5}/>
          <Button callBack={reset} title={'reset'}/>
          <Button callBack={increase} title={'+'} count={count}/>

        </div>
    )
}