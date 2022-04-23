import { useState } from "react";
import { Container, Current,Screen, Previous, Button } from "./Styled";


export default function Colculator() {
    const [current, setCurrent] = useState("");
    const [operation, setoperation] = useState("");
    const [previous, setPrevious] = useState("");

    const valueHandler = (e) => {
        const valueBtn = e.target.getAttribute("data");

        if(valueBtn === "." && current.includes("."))return;
        setCurrent(current + valueBtn)
    };

    const deleteHandler = () => {
        setCurrent(String(current).slice(0, -1))
    }
    const clearAllHandler = () => {
        setCurrent("");
        setPrevious("");
        setoperation("");
    };

    const operationHandler = (e) => {
        if(current === "") return;
        if(previous !== "") {
            let val = compute();
            setPrevious(val);
        }else{
            setPrevious(current)
        }

        setCurrent("")
        setoperation(e.target.getAttribute('data'))
    };

    const equalsHandler = () => {
        let val = compute();
        if(val === undefined || val === null) return;

        setCurrent(val);
        setPrevious("");
        setoperation("");
    };


    const compute = () => {
        let result;
        let previousNumber = parseFloat(previous);
        let currentNumber = parseFloat(current);

        if(isNaN(previousNumber) || isNaN(currentNumber))return;

        switch (operation){
            case "÷":
                result = previousNumber / currentNumber;
                break;
            case "×":
                result = previousNumber * currentNumber;
                break;
            case "+":
                result = previousNumber + currentNumber;
                break;
            case "-":
                result = previousNumber - currentNumber;
                break;
                default:
                    return;
        }
        return result;
    }
    

        
    

  return (
    <Container>
        <Screen>
            <Previous>{previous} {operation}</Previous>
            <Current>{current}</Current>
        </Screen>
        <Button onClick={clearAllHandler} gridSpan={2}>AC</Button>
        <Button onClick={deleteHandler} control>DEL</Button>
        <Button data={"÷"} onClick={operationHandler} operation>÷</Button>
        <Button data={"1"} onClick={valueHandler}>1</Button>
        <Button data={"2"} onClick={valueHandler}>2</Button>
        <Button data={"3"} onClick={valueHandler}>3</Button>
        <Button data={"×"} onClick={operationHandler} operation>×</Button>
        <Button data={"4"} onClick={valueHandler}>4</Button>
        <Button data={"5"} onClick={valueHandler}>5</Button>
        <Button data={"6"} onClick={valueHandler}>6</Button>
        <Button data={"+"} onClick={operationHandler} operation>+</Button>
        <Button data={"7"} onClick={valueHandler}>7</Button>
        <Button data={"8"} onClick={valueHandler}>8</Button>
        <Button data={"9"} onClick={valueHandler}>9</Button>
        <Button data={"-"} onClick={operationHandler} operation>-</Button>
        <Button data={"."} onClick={valueHandler} period>.</Button>
        <Button data={"0"} onClick={valueHandler}>0</Button>
        <Button onClick={equalsHandler} equals={2}>=</Button>
    </Container>
  )
}

