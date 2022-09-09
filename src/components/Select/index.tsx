import {StyledNativeSelect} from "./styles"
import {NativeSelectProps} from "@mui/material/NativeSelect"
import {StyledFormControl} from "../Input/styles"
import {Typography} from "@mui/material"

interface Option {
    value: string
    label: string
}

interface SelectProps extends NativeSelectProps {
    label: string
    options?: Option[]
}

function Select({label, options, ...props}: SelectProps) {
    const isEmpty = options?.length === 0

    return (
        <StyledFormControl fullWidth={props.fullWidth}>
            <Typography htmlFor={props.name} component="label" variant="h6">
                {label}
            </Typography>
            <StyledNativeSelect {...props}>
                {isEmpty && (
                    <option value="">Nenhuma opção foi encontrada</option>
                )}
                {options?.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </StyledNativeSelect>
        </StyledFormControl>
    )
}

Select.defaultProps = {
    options: [],
}

export default Select
