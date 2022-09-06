import {Container} from "@mui/material"
import styled from "styled-components"

export const StyledContainer = styled(Container)`
    padding-top: 1rem;
    padding-bottom: 1rem;

    img {
        max-width: 30vw;
    }
`

export const Cover = styled.div`
    display: flex;
    align-items: center;

    z-index: 1;
    position: relative;
    background: url("/images/house.png") no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 100vh;

    &:after {
        content: " ";
        position: absolute;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        background-color: rgba(20, 20, 20, 0.9);
    }
`
