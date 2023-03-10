import styled from "styled-components"

export const Table = styled.table`
    width: 100%;
    background-color: white;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;
`

export const TableHeadColumn = styled.th<{width?: number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px;
    text-align: left;
`
