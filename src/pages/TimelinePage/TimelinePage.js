import styled from "styled-components";
import NavBar from "../../components/Navbar/NavBar";
import Publishing from "./Publishing";
import Posts from "./Posts";
import { useState } from "react";

export default function TimelinePage() {
  const [update, setUpdate] = useState(0);
  return (
    <>
      <NavBar />
      <TimelineContainer>
        <h1>timeline</h1>
        <Publishing setUpdate = {setUpdate} update = {update}/>
        <Posts update = {update}/>
      </TimelineContainer>
    </>
  );
}
const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  & > h1 {
    font-size: 43px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 43px;
  }
`;
