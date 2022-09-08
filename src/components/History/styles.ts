import styled from "styled-components"
import {Container} from "@mui/material"

export const StyledContainer = styled(Container)`
    padding-top: 130px;
    padding-bottom: 130px;
    display: flex !important;
    flex-wrap: wrap;
    gap: 1rem;

    > div {
        flex: 1;
    }

    img {
        width: 100%;
    }

    .Video {
        position: relative;

        .notebook {
            z-index: 1;
            transition: 200ms ease;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
        }

        .play {
            z-index: 2;
            max-width: 123px;
            position: absolute;
            top: 0;
            bottom: 4rem;
            left: 0;
            right: 0;
            margin: auto;
        }
    }
`
