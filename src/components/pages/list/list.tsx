import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import PaperBase from "@material-ui/core/Paper";

import { stylesConstans } from "components/shared/utils";

import { GridItem, Paper } from "./styled";

const { colors } = stylesConstans;

const Header = styled(PaperBase)`
  && {
    box-sizing: border-box;
    padding: 10px;
    background-color: ${colors.white};
    width: 100%;
    min-height: 100px;
    margin-bottom: 10px;
  }
`;
const Content = styled(PaperBase)`
  && {
    box-sizing: border-box;
    padding: 10px;
    background-color: ${colors.white};
    width: 100%;
    min-height: 400px;
  }
`;

export const List = () => (
  <Paper>
    <Header>
      <Grid container>
        <GridItem md={6}>First Filter</GridItem>
        <GridItem md={6}>Second Filter</GridItem>
      </Grid>
    </Header>
    <Content>
      <Grid container>
        <GridItem container md={3}>
          <GridItem>Category</GridItem>
          <GridItem>Assignee</GridItem>
        </GridItem>
        <GridItem md={9}>Actual List</GridItem>
      </Grid>
    </Content>
  </Paper>
);
