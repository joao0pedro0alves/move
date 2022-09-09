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
`
