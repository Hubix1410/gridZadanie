import styled, { css } from 'styled-components'

export function MagicHeader() {

    const MainHeader = styled.div`
        width:100%;
        height:10vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    return (
        <MainHeader>
            <h1>Magic Div</h1>
        </MainHeader>
    )
}