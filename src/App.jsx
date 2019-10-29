import { Global } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

import { Gap } from "~/components/Gap";

import { Head } from "./Head";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Hobbies } from "./Hobbies";

import { globalCss } from "./global.css";

const Root = styled.div`
  width: 210mm;
  height: 297mm;
  padding: 0;

  border: 1px solid black;
  margin: 1rem;
  @media print {
    margin: none;
    border: none;
  }
`;

export const App = () => (
  <>
    <Global styles={globalCss} />

    <Root>
      <Head />
      <Gap size={2} />
      <Skills />
      <Gap size={2} />
      <Projects />
      <Education />
      <Hobbies />
    </Root>
  </>
);
