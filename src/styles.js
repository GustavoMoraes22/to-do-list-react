import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100%;
    min-height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   
`


export const ToDoList = styled.div`
    background: white;
    padding: 30px  20px;
    border-radius: 5px;
    

    ul{
        padding: 0;
        margin-top: 60px;
    }

    h3{
        text-align: center;
    }
`

export const Input = styled.input`
border-radius: 5px ;
border: 2px solid rgba(209, 211, 212, 0.4);
height: 40px;
margin-right: 30px;
width: 342px;
`

export const Button = styled.button`
width: 130px;
height: 40px;

border-radius: 5px ;
background: rgba(128, 82, 236, 1);
border: none;
color: white;
line-height:2px;
font-size: 17px;
cursor: pointer;
transition: all 3ms;

&:active{
    opacity: 0.6;
}

&:hover{
    opacity: 0.8;
}

`
export const ListItem = styled.div`
background: ${props => props.isFinished ? "#E8FF8B" : "#E4E4E4"};
box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
border-radius:5px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
padding: 0 10px;

li{
    list-style: none;
}
`

