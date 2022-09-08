import {Container} from "@mui/material"
import styled from "styled-components"
import theme from "../../styles/theme"

export const StyledContainer = styled(Container)`
    padding-top: 130px;
    padding-bottom: 130px;
    text-align: center;

    .MuiDivider-root {
        border-color: ${theme.palette.secondary.main};
        border-width: 4px;
        width: 200px;
        margin: 10px auto 20px;
    }
`
