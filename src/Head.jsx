import React from "react";
import styled from "@emotion/styled";

const Title = styled.h1`
  margin: 0 0 0.5rem 0;
`;

export const Head = () => (
  <div>
    <Title>Vadim Majsuk</Title>
    <span>Minsk, Belarus</span> /{" "}
    <a href="tel:+375291469479">+375 29 1 469 479</a> /{" "}
    <a href="mailto:vmajsuk@gmail.com">vmajsuk@gmail.com</a>
  </div>
);
