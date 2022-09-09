import styled from "styled-components"
import {Backdrop, Container} from "@mui/material"
import theme from "../../styles/theme"

export const StyledBackdrop = styled(Backdrop)`
    z-index: 10;
`

export const StyledCollapse = styled.div`
    box-shadow: 0px -8px 10px rgba(0, 0, 0, 0.12);
    border-radius: 20px 20px 0px 0px;
    background-color: ${theme.palette.background.paper};

    z-index: 15;
    width: calc(100% - 10rem);
    position: fixed;
    margin: auto;
    bottom: -300px;
    left: 0;
    right: 0;
    opacity: 0;

    padding-top: 60px;
    padding-bottom: 60px;
    transition: 400ms ease-out;

    &.in {
        opacity: 1;
        bottom: 0;
    }

    @media screen and (max-width: 600px) {
        width: calc(100% - 1rem);
    }
`

export const StyledContainer = styled(Container)`
    text-align: center;
`
