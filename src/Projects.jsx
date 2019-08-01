import styled from "@emotion/styled";
import React from "react";

const Root = styled.div`
  margin-bottom: 16px;
`;

const Project = ({ role, title, company, dates, stack, description }) => (
  <Root>
    <div>
      <b>
        {role} - {title}
      </b>
      , {company}, {dates}
    </div>
    {stack && (
      <div>
        <b>Tech stack:</b> <i>{stack}</i>
      </div>
    )}
    <div>{description}</div>
  </Root>
);

const projects = [
  {
    role: "Frontend Developer",
    title: "HelloClient CRM (https://helloclient.io/)",
    company: "HelloClient",
    dates: "4/2018 - 8/2019",
    stack:
      "React, TypeScript, Apollo GraphQL, material-ui, reworm, react-use, emotion",
    description: `
    As a part of a small team of developers created HelloClient CRM.
    Contributed heavily to the codebase, having over 2k commits, mostly
    writing application core and ui. Created a clean proxy-based solution
    for internationalization. Helped team with setting up error logging,
    integration tests. Actively participated in refactoring.
    Assisted development doing some business analysis and ui/ux design prototyping.
    `
  },
  {
    role: "Fullstack Developer",
    title: "Resolve (https://www.resolvepay.com/)",
    company: "Insoft Engineering",
    dates: "4/2018 - 9/2018",
    stack:
      "React, Redux (thunk), sass, Node.js, express, sequelize, jest, Puppeteer, PostgreSQL",
    description: `
    Helped a medium-sized team build UI of Resolve dashboard.
    Created pdf statement generation with Puppeteer, implemented a couple of complex feature
    involving big codebase changes. Implemented code splitting.
    Covered application with Puppeteer integration tests.
    Implemented exhaustive testing for the most vital backend code.
    Did a lot of refactoring, actively suggested ways to simplify and
    improve app architecture.
     `
  },
  {
    role: "DevOps / Backend Engineer",
    title: "Schema v2 Editor support",
    company: "Insoft Engineering",
    dates: "5/2018 - 7/2018",
    stack: "Docker, Gitosis, bash, Python",
    description: `
    Maintained and helped to develop Heroku-like solution.
    Helped to implement zero-downtime docker container replacement.
    Created tools to ease the management of gitosis config, tools
    to deploy gitosis hooks. Fixed regressions, optimized existing solution. 
    `
  },
  {
    role: "Frontend Developer",
    title: "Tops",
    company: "Insoft Engineering",
    dates: "2/2018 - 2/2018",
    stack: "React, Redux, Node.js, express, Magento",
    description: `
    Helped Thailand-based team to build and ship ecommerce React application.
    Was responsible for building parts of checkout flow, implemented a complex
    "wishlist" feature, improved build system,
    helped the team with architecture/best practices.
    `
  },
  {
    role: "Fullstack Developer",
    title: "Schema.io v2 Editor",
    company: "Insoft Engineering",
    dates: "10/2017 - 12/2017",
    stack: "React, Redux, Node.js, websockets, ES generators",
    description: `
    Helped team to build the Shopify-like ecommerce website constructor.
    Implemented both client-side and server-side of a complex notification system
    using websockets and generators.`
  },
  {
    role: "Fullstack Developer",
    title: "Spinn.com support",
    company: "Insoft Engineering",
    dates: "10/2017 - 7/2018",
    stack: "React, Flux, sass, Node.js, express, AWS, jest",
    description: `
    My main responsibilities were to fix regressions and implement new features.
    Amongst others, the most interesting were integration with Amazon Alexa,
    REST API for mobile applications (ios and Android) covered with tests`
  },
  {
    role: "Fullstack Developer",
    title: "Spinn.com",
    company: "Insoft Engineering",
    dates: "1/2017 - 10/2017",
    stack: "React, Flux, sass, Node.js, express, Stripe, Mailchimp",
    description: `
    Built spinn.com marketplace and dashboard as a part of a medium-sized team.
    Implemented checkout flow, auto ordering feature, complex integration with stripe
    involving merchants, complex mailchimp integration. Did a lot of bundle size and
    peformance optimizations, implemented code splitting. Participated in refactoring,
    actively suggested architecture optimizations.
    `
  },
  {
    role: "Fullstack Developer",
    title: "Marais.ru support",
    company: "Insoft Engineering",
    dates: "12/2016 - 1/2017",
    stack: "React, Flux, sass, Node.js, express, Mailchimp",
    description: `
    Fixed regressions, implemented a wishlist feature involving Mailchimp integration.
    `
  },
  {
    role: "Fullstack Developer",
    title: "Insoft Storefront",
    company: "Insoft Engineering",
    dates: "11/2016 - 12/2016",
    stack: "React, Flux, sass, Node.js, express",
    description: `
    Internal company project.
    Created a starter kit for small to medium ecommerce websites with React SSR.
    `
  },
  {
    role: "Fullstack Developer",
    title: "Marais.ru",
    company: "Insoft Engineering",
    dates: "7/2016 - 11/2016",
    stack: "React, Flux, sass, Node.js, express",
    description: `
    Under a guidance of a senior developer built a ecommerce website.
    `
  },
  {
    role: "Intern",
    title: "Marais.ru",
    company: "Insoft Engineering",
    dates: "6/2016 - 7/2016"
  }
];

export const Projects = () => projects.map(project => <Project {...project} />);
