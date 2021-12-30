import { useState } from 'react'
import styled from 'styled-components'

export function MagicDiv() {

    const [divState, setDivState] = useState("none")

    console.log(divState);

    function resetDiv() {
        setDivState("none")
    }

    function changeDivState() {
        switch (divState) {
            case "none":
                setDivState("firstPart");
                break;
            case "firstPart":
                setDivState("secondPart");
                break;
            case "secondPart":
                setDivState("thirdPart");
                break;
        }

        setTimeout(resetDiv, 2000)
    }

    const handleColorType = color => {
        switch (divState) {
            case "none":
                return ("#ccc")
            case "firstPart":
                return ("#00ff00")
            case "secondPart":
                return ("#00ff00")
            case "thirdPart":
                return ("#ff0000")
            default:
                return ("#ccc")
        }
    };


    const MainBackgound = styled.div`
        width:100vw;
        height:90vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const MagicDiv = styled.div`
        width:200px;
        height:200px;
        background-color: ${({ color }) => handleColorType(color)};;
        border-radius: 12px;
        &:hover{
            border: 2px solid blue;
            cursor :pointer;
        }
    `

    return (
        <MainBackgound>
            <MagicDiv onClick={changeDivState} />
        </MainBackgound>
    )
}