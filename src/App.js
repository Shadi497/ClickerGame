import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GiMoneyStack } from "react-icons/gi";
import {
  GlobalStyle,
  Title,
  Container,
  Center,
  Center2,
  Body,
  B,
  P,
  F,
  T,
  AppWrapper,
} from "./styles";

const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "#4863A0", // main background color
};

function App() {
  const [counter, setCounter] = useState(0);
  const [money, setMoney] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [disabledT, setDisabledT] = useState(false);
  const [disabledB, setDisabledB] = useState(false);
  const [disabledC, setDisabledC] = useState(false);
  const [ticking, setTicking] = useState(false);
  const [tickingT, setTickingT] = useState(false);
  const [tickingTi, setTickingTi] = useState(false);
  const [n, setN] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => ticking && setCounter(counter + n), 10000);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    const timer = setInterval(() => tickingT && setCounter(counter + n), 1000);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    const timer = setInterval(
      () => tickingTi && setMoney((counter + n) * 2),
      1000
    );
    return () => clearInterval(timer);
  });

  const no = () => {
    if (counter > 50) {
      setTicking(true);
      setDisabledB(!disabledB);
      setMoney(money - 30);
    }
  };

  const ec = () => {
    if (counter > 100) {
      setTickingT(true);
      setTickingTi(true);
      setDisabledC(!disabledC);
      setMoney(money - 100);
    }
  };

  const increament = () => {
    setCounter(counter + n);
    setMoney((counter + n) * 2);
  };

  const double = () => {
    if (counter >= 10) {
      setDisabled(!disabled);
      setN(2);
    }
  };

  const triple = () => {
    if (counter >= 30) {
      setDisabledT(disabled);
      setN(3);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Title>Welcome to Shadi's Restaurant</Title>
        <F>Wallet:</F>
        <F>{`${money}  BD`}</F>
        <Container>
          <B onClick={increament}></B>
          <P>{`${counter} dishes`}</P>
        </Container>
        <Body>
          <Center>
            <p>Upgrades</p>

            <button
              onClick={double}
              className="btn btn-danger btn-outline-dark"
              disabled={disabled}
              title="Unlock it at 10 dishes"
            >
              DOUBLE your dishes!
            </button>
            <button
              onClick={triple}
              className="btn btn-danger btn-outline-dark"
              disabled={disabledT}
              title="Unlock it at 30 dishes"
            >
              TRIPLE your dishes!
            </button>
            <p2>Unlock it at 10 dishes</p2>

            <p2>Unlock it at 30 dishes</p2>
          </Center>
          <Center2>
            <p>Buildings</p>
            <button
              onClick={no}
              disabled={disabledB}
              className="btn btn-success btn-outline-dark"
              title="Unlock it at 50 dishes"
            >
              <T>
                <GiMoneyStack />
                <bold>30 </bold>
              </T>
              New Oven
            </button>
            <p2>
              Autoclick once every 10 sec.
              <br /> Unlock it at 50 dishes.
            </p2>

            <button
              onClick={ec}
              disabled={disabledC}
              className="btn btn-success btn-outline-dark"
              title="Unlock it at 100 dishes"
            >
              <T>
                <GiMoneyStack />
                <bold>100 </bold>
              </T>
              Hire extra Chef!
            </button>
            <p2>
              Autoclick once every second.
              <br /> Unlock it at 100 dishes.
            </p2>
          </Center2>
        </Body>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
