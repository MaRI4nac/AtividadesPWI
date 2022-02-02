import styled from 'styled-components'

const Container = styled.div`
    display: flex; 
    height: 100vh; 
    flex-direction: column; 
    color: black;
    font-size: 1.1em;  

    padding-top: 4%; 
    align-items: center; 

    .background {

    }

    .Insert { 
        padding-bottom: 2em; 
    }

    .Description {
        padding: 1em 0em 1em 0em;
    }

    .table-act {
        border-collapse: collapse;
    }

    thead {
        background-color: #986CDF;
    }

    tbody {
        background-color: #F5F5F5;
    }

    td {
        text-align: left;
        height:  61.93px;
        padding: 1em;
        color: #6D6868;
        font-weight: 600;
    }

    th {
        height: 61.93px;
        text-align: left;
        padding: 1em;
        color: #ffff;
        font-weight: 800;
    } 

    input {
        width: 209px;
        height: 36px;

        background: #FFFFFF;
        border: 1px solid #A8A8A8;
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: .5em;
    }

    .Button {
        cursor: pointer;
    }

    button {
        padding: 0.5em 1em;
        align-items: center;
    }

    button:hover {
        background-color: #aa3997;
        transition: 1s;
    }
`

export { Container }