import styled from "styled-components"

export const Container=styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    align-self: center;
    
`;
export const BoxForTotals=styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    align-self: center;
    justify-content: center;
    text-align: center;
    border: lightblue 5px solid;
    border-radius:10px;
    &:hover{
        transform: scale(1.03);
        cursor: pointer;
    }
`;
export const Textp=styled.p`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 20px;
    font-weight: 600;
    align-self: center;
    background-color: lightblue;
`;
export const RowGridBox=styled.div`
    margin: auto;
    display: flex;
    flex-direction: Row;
    justify-content: space-evenly;
    margin-bottom: 20px;
    align-self: center;
    
`;
export const RowGridContainer=styled.div`
    margin: auto;
    display: flex;
    flex-direction: Row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: -10px;
    align-self: center;
    
`;
export const SearchInput=styled.input`
    border: none;
    border: 1px black solid;
    height: 30px;
    width: 200px;
    padding-left: 10px;
    padding-right: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
    outline: none;
`
export const FilterButton=styled.button`
    border: none;
    height: 30px;
    width: 80px;
    font-weight: bold;
    border-top-right-radius:10px;
    border-bottom-left-radius:10px;
    margin-left: 10px;
    margin-bottom: 10px;
    outline: none;
    &:hover{
        cursor: pointer;
        transform: scale(1.02);
    }
`
export const MainTitle=styled.p`
    font-weight: bold;
    text-transform: capitalize;
    font-size: 25px;
    
`;
export const AddButton=styled.button`
    border: 3px solid lightblue;
    background-color: white;
    height: 30px;
    align-self: center;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: -10px -10px 15px rgb(247,247,247),
        10px 10px 15px rgb(247,247,247);
    &:active{
        border:none;
    }

    &:hover{
        background-color: lightblue;
        border: 3px solid lightblue;
        cursor: pointer;
        transform: scale(1.003);
    }

`;
export const Dialog=styled.div`
    z-index: 100;
    align-self: center;
    position: fixed;
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    width: 70vw;
    max-width: 500px;
    border-top-right-radius:30px ;
    border-top-left-radius:30px ;
    height: 90vh;
    text-align: center;
    align-self: center;
    background-color: white;
    box-shadow: 5px 5px 100px rgb(230,230,230);
    
`;
export const EditDialog=styled.div`
    z-index: 100;
    align-self: center;
    position: fixed;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    width: 80vw;
    border-top-right-radius:30px ;
    border-top-left-radius:30px ;
    height: 70vh;
    text-align: center;
    align-self: center;
    background-color: white;
    box-shadow: 5px 5px 100px rgb(230,230,230);
    
`;
export const RowGrids=styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    margin-left: 30px;
    width: 20vw;
`;
export const MainRowGrids=styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    align-self: center;
    align-items: center;
    margin: -10px;
`;
export const MainDashboradContainer=styled.div`
    width: 80vw;
    padding-top: 30px;
    min-height: 100%;
    align-self: center;
    align-items: center;
    margin-left: auto;
    @media(min-width:1100px){
        overflow-x: hidden;
    }
`;
export const Span=styled.span`
    margin: 0;
    padding: 0;
    padding-left: 10px;
    justify-content: right;
    &:hover{
        cursor: pointer;
        font: bold;
        color: green;
    }
    
`;
export const SideBar=styled.div`
    margin: auto;
    display: flex;
    position: fixed;
    top: 0vh;
    z-index: 100;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    box-shadow: black 0.1px 0px 2px;
    width: 20vw;
    background-color: lightblue;
    
`
export const ConfirmationDialog=styled.div`
    z-index: 100;
    align-self: center;
    justify-content: center;
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 70vw;
    max-width: 500px;
    border-radius:30px ;
    height: 30vh;
    text-align: center;
    align-self: center;
    background-color: white;
    box-shadow: 5px 5px 100px rgb(230,230,230),
                -5px -5px 100px rgb(230,230,230);
    
`;

export const ConfirmationTitle=styled.p`
    font-weight: bold;
    margin-top:-10%;
    text-transform: capitalize;
    font-size: 20px;
    
`;
export const ConfirmButton=styled.button`
    border: 3px solid ${(props)=>props.color};
    background-color: white;
    height: 30px;
    width:60px;
    margin: 5px;
    align-self: center;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: -10px -10px 15px rgb(247,247,247),
        10px 10px 15px rgb(247,247,247);
    &:active{
        border:none;
    }

    &:hover{
        background-color: ${(props)=>props.color};
        border: 3px solid ${(props)=>props.color};
        cursor: pointer;
        transform: scale(1.003);
    }
`;