import styled from "styled-components"
import {Stepper} from "@mui/material"
import theme from "../../../styles/theme"

export const StyledStepper = styled(Stepper)`
    margin-top: 40px;
    margin-bottom: 40px;

    .MuiStepLabel-iconContainer .MuiSvgIcon-root {
        width: 2.5rem;
        height: 2.5rem;
    }

    .MuiStepIcon-root.Mui-active {
        color: ${theme.palette.secondary.main};
    }

    .MuiStepIcon-root.Mui-completed {
        color: ${theme.palette.secondary.main};
    }

    @media screen and (max-width: 600px) {
        margin-top: 20px;
        margin-bottom: 20px;

        .MuiStepLabel-label {
            font-size: 12px;
        }

        .MuiStepLabel-iconContainer .MuiSvgIcon-root {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 4rem;

    .Content {
        width: 100%;
    }

    .Actions {
        padding-top: 2rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 600px) {
        gap: 1rem;
        flex-wrap: wrap;

        .Actions {
            width: 100%;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`
