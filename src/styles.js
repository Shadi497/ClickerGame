import styled, { createGlobalStyle } from "styled-components";
import img from "./Resturant2.jpg";
import img2 from "./dish.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Img = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Title = styled.h1`
  color: white;
  display: block;
  text-align: center;
  text-decoration: underline;
  padding-top: 25px;
  margin-bottom: 60px;
`;

export const Emoji = styled.span`
  margin-right: 20px;
  font-size: 1.6em;
`;

export const Name = styled.span`
  flex-grow: 1;
  font-size: 1.6em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;

export const F = styled.h2`
  color: white;
  display: block;
  float: top;
  text-align: right;
  padding-top: 25px;
  font-size: 32px;
  margin-right: 150px;
`;

export const AppWrapper = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: block;

  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  width: 500px;
  height: 200px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
`;
export const B = styled.button`
  background-image: url(${img2});
  background-size: contain;
  border-radius: 300px;
  font-size: 25px;
  color: black;
  width: 200px;
  height: 200px;
  font-weight: bold;
`;
export const P = styled.p`
  margin-top: 45px;
  margin-left: 115px;
  font-size: 25px;
  color: white;
`;
export const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Center = styled.div`
  display: block;
  flex-direction: column;
  width: 30%;
  height: auto;
  float: left;
  margin-left: 2%;
  margin-bottom: 65px;

  p {
    font-weight: bold;
    text-align: left;
    margin-top: 95px;
    font-size: 30px;
    color: white;
  }
  button {
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    margin-left: 25px;
    width: 45%;
    padding: 25px;
    color: white;
    border-radius: 50px;
  }

  p2 {
    font-weight: bold;
    font-style: italic;
    text-align: left;
    margin-top: 15px;
    margin-left: 45px;
    margin-right: 55px;
    font-size: 18px;
    color: white;
    padding-bottom: 25px;
  }
`;

export const Center2 = styled.div`
  display: block;
  flex-direction: column;
  width: 35%;
  height: auto;
  float: left;
  margin-left: 2%;
  margin-bottom: 65px;

  p {
    font-weight: bold;
    text-align: left;
    margin-top: 95px;
    font-size: 30px;
    color: white;
  }
  button {
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    margin-left: 25px;
    width: 45%;
    padding: 25px;
    color: white;
    border-radius: 50px;
    margin-bottom: 25px;
  }

  p2 {
    display: block;
    float: right;
    font-weight: bold;
    font-style: italic;
    text-align: left;
    margin-top: 15px;
    margin-left: 45px;
    margin-right: 55px;
    font-size: 18px;
    color: white;
    padding-bottom: 25px;
  }
`;

export const T = styled.div`
  text-align: left;
  float: left;
  padding-right: 10px;
`;
