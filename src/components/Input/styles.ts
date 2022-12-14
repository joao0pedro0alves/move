import styled, {css} from "styled-components"
import {InputBase, FormControl} from "@mui/material"
import theme from "../../styles/theme"

export const inputStyles = css`
    width: 100%;
    min-height: 56px;
    border-radius: 5px;
    padding-left: 1rem;
    border: 1px solid ${theme.palette.grey[200]};
    background-color: ${theme.palette.grey[100]};

    @media screen and (max-width: 600px) {
        min-height: 45px;
    }
`

export const StyledFormControl = styled(FormControl)`
    label {
        text-align: left;
        margin-bottom: 9.5px;
    }

    .MuiInputBase-root {
        margin-top: 0;
    }

    .MuiInput-root:before {
        border-color: transparent;
    }

    option {
        padding: 1rem;
    }

    textarea {
        padding-left: 1rem;
    }

    @media screen and (max-width: 600px) {
        label {
            margin-bottom: 2px;
            font-size: 14px;
        }
    }
`

export const StyledInputBase = styled(InputBase)`
    ${inputStyles}
`
