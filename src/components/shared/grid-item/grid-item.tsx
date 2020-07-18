import GridBase, { GridProps } from "@material-ui/core/Grid";
import styled from "styled-components";

export const GridItem = styled(GridBase).attrs<GridProps>((props) => ({
  item: props.item || true,
  xs: props.xs || 12,
}))<GridProps>`
  && {
    display: flex;
    justify-content: center;
  }
`;
