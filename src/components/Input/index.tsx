import {Typography} from "@mui/material"
import {InputBaseProps} from "@mui/material/InputBase"
import {StyledFormControl, StyledInputBase} from "./styles"

export interface InputProps extends InputBaseProps {
    label?: string
}

function Input({label, fullWidth, ...props}: InputProps) {
    return (
        <StyledFormControl fullWidth={fullWidth}>
            <Typography htmlFor={props.name} component="label" variant="h6">
                {label}
            </Typography>
            <StyledInputBase {...props} />
        </StyledFormControl>
    )
}

Input.defaultProps = {}

export default Input
