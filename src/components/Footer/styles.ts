import styled from "styled-components"
import theme from "../../styles/theme"

export const StyledFooter = styled.footer`
    background-color: ${theme.palette.secondary.light};

    .MuiContainer-root {
        padding-top: 130px;
        padding-bottom: 130px;
    }

    img {
        width: 100%;
        max-width: 100px;
    }
`
