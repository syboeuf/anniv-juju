import React from "react";
import { useTimer } from "react-timer-hook";
import styled from "styled-components";
import moment from "moment";

const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const SepartorContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  margin: 0 0 10px 0px;
`;

const Separtor = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #404549;
  border-radius: 6px;
  margin: 5px 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
  &: first-child {
    margin-left: 0;
  }
`;

const Title = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;

const DigitContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
`;

const SingleDigit = styled.span`
  position: relative;
  display: flex;
  flex: 0 1 25%;
  font-size: 30px;
  background-color: #404549;
  border-radius: 5px;
  padding: 10px 12px;
  color: white;
  &:first-child {
    margin-right: 2px;
  }
  &:after {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 50%;
    bottom: 50%;
    content: "";
    width: "100%";
    height: 2px;
    background-color: #232323;
    opacity: 0.4;
  }
`;

function Digit({ value, title }) {
  const leftDigit = value >= 10 ? value.toString()[0] : "0";
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
  return (
    <Container>
      <Title>{title}</Title>
      <DigitContainer>
        <SingleDigit>{leftDigit}</SingleDigit>
        <SingleDigit>{rightDigit}</SingleDigit>
      </DigitContainer>
    </Container>
  );
}

function TimerStyled({ seconds, minutes, hours, days }) {
  return (
    <TimerContainer>
      {days !== undefined ? (
        <Digit value={days} title="DAYS" addSeparator />
      ) : null}
      {days !== undefined ? (
        <SepartorContainer>
          <Separtor />
          <Separtor />
        </SepartorContainer>
      ) : null}
      <Digit value={hours} title="HOURS" addSeparator />
      <SepartorContainer>
        <Separtor />
        <Separtor />
      </SepartorContainer>
      <Digit value={minutes} title="MINUTES" addSeparator />
      <SepartorContainer>
        <Separtor />
        <Separtor />
      </SepartorContainer>
      <Digit value={seconds} title="SECONDS" />
    </TimerContainer>
  );
}

export default function UseTimerDemo() {
  const birthday = moment().set({
    year: 2023,
    minute: 0,
    second: 0,
    hour: 0,
    date: 27,
    month: 4,
  });
  const birthdayDate = moment().set({
    year: 1992,
    minute: 0,
    second: 0,
    hour: 0,
    date: 27,
    month: 4,
  });
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: birthday.toDate(),
    onExpire: () => console.warn("Joyeux anniversaire"),
  });

  return (
    <center>
      <div>
        <h2>Juju bientôt 31 ans</h2>
        <p>Il te reste avant le grand jour</p>
        <center>
          <TimerStyled
            seconds={seconds}
            minutes={minutes}
            hours={hours}
            days={days}
          />
        </center>
        <img src={require("./image.png")} alt="Logo" style={{ width: 200 }} />
        <p>Tu as passer comme temps sur cette terre</p>
        <p>{`En années : ${moment().diff(birthdayDate, "years")} ans`}</p>
        <p>{`En mois : ${moment().diff(birthdayDate, "months")} mois`}</p>
        <p>{`En jours : ${moment().diff(birthdayDate, "days")} jours`}</p>
        <p>{`En heures : ${moment().diff(birthdayDate, "hours")} heures`}</p>
        <p>{`En minutes : ${moment().diff(
          birthdayDate,
          "minutes"
        )} minutes`}</p>
        <p>{`En secondes : ${Math.floor(
          moment().diff(birthdayDate, "secondes") / 1000
        )} secondes`}</p>
        <p>Fiiouuuuu, ca commence à dater, vieille croutonne 🤣🤣🤣</p>
      </div>
    </center>
  );
}
