import styled from "styled-components"

export const StyledP=styled.p`
    padding:2px;
    background-color: #ececec;
    width: 100%;
    margin-top: 5px;
    &:hover{
        cursor: pointer;
        background-color: #e2e1e1;
      
    }
`
export const AutoComplete=styled.div`
    z-index: 100;
    position: fixed;
    text-align: center;
    padding:10px;
    padding-left:10px;
    width: 170px;
    border: 0.5px solid #535353;
    border-top: none;
    margin-left: -60px;
    overflow-y:scroll;
    background-color: white;
    box-shadow: 0.1px 0.1px 0.1px rgb(230,230,230);
    max-height: 110px;
`;
export const DeleteButton=styled.button`
    margin-top:20px;
    margin-left: 40px;
    padding:5px;
    width: 100px;
    border-radius: 10px;
    background-color: #ff1e00c8;
    font-weight: bolder;
    color: white;
    &:hover{
        cursor: pointer;
        background-color: #ff1e00d6;
    }
`
export const EditButton=styled.button`
    margin-top:20px;
    margin-left: 40px;
    padding:10px;
    background-color: #00d9ffc7;
`
export const DecoratedText=styled.p`
    padding: 10px;
    font-weight: bolder;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top:auto;
    margin-left: 20px;
`
export const Container=styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    align-self: center;
    
`;
export const DashboardGrids=styled.div`
    margin-left:-70vw;
    margin-top:10vh;
`
export const EmpProfileImage=styled.img`
    width: 20vw;
    border: 1px solid black;
    border-style: groove;
    height: 30vh;
`
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
export const SelectButton=styled.select`
    border: none;
    height: 30px;
    width: 100px;
    font-weight: bold;
    border-top-right-radius:10px;
    border-bottom-left-radius:10px;
    margin-left: 10px;
    margin-bottom: 10px;
    outline: none;
    padding: 5px;
    background-color: rgb(239, 239, 239);
    &:hover{
        cursor: pointer;
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
export const PaginationButton=styled.button`
    border: 3px solid lightblue;
    background-color: white;
    height: 30px;
    margin-top: 10px;
    align-self: center;
    border-radius: 5px;
    font-weight: bold;
    margin-left:5px;
    float: right;
    box-shadow: -5px -5px 5px rgb(247,247,247),
        5px 5px 5px rgb(247,247,247);
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

export const ProfileImage=styled.div`
    height:50px;
    width:50px;
    margin-right:10px;
    background:lightblue;
    border-radius:100%;
    border:10px solid white;
    border-style: double;
`
export const ProfileShower=styled.div`
    background-color: white;
    height: 100px;
    width: 100%;
    align-self: center;
    border-radius: 5px;
    font-weight: bold;
    position: absolute;
    top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;
export const SideBarMenus=styled.button`
    border: 3px solid lightblue;
    background-color: white;
    height: 30px;
    width: 100%;
    margin-top: 20px;
    align-self: center;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: -0.1px -0.1px 1px rgb(247,247,247),
        0.1px 0.1px 1px rgb(247,247,247);
    &:active{
        border:none;
    }
    &:focus{
        background-color: lightblue;
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
export const EmployeDetailRowGrids=styled.div`
    display: flex;
    flex-direction: row;
    width: 60vw;
    align-self: center;
    align-items: center;
    
`;
export const MainRowGrids=styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    align-self: center;
    align-items: center;
    margin: -10px;
    scroll-behavior: smooth;
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
export const ConfirmationDialog2=styled.div`
    z-index: 100;
    justify-content: center;
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 67vw;
    max-width: 500px;
    border-radius:30px ;
    height: 40vh;
    background-color: white;
    padding-left: 50px;
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