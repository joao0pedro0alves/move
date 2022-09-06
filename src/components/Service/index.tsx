import {Box, Typography} from "@mui/material"
import {StyledPaper} from "./styles"
import {Icon} from "react-feather"

interface ServiceProps {
    Icon: Icon
    title: string
    content: string
}

function Service(props: ServiceProps) {
    return (
        <StyledPaper>
            <Box>
                <Typography color="primary">
                    <props.Icon
                        width="70px"
                        height="70px"
                        strokeWidth="0.8px"
                    />
                </Typography>
                <Typography
                    component="h3"
                    color="secondary"
                    fontWeight="bold"
                    fontSize="23px"
                >
                    {props.title}
                </Typography>
                <Typography variant="body1">{props.content}</Typography>
            </Box>
        </StyledPaper>
    )
}

export default Service
