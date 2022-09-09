import {Box, Container, Typography} from "@mui/material"
import {StyledFooter} from "./styles"

function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Box>
                    <Typography component="div" gutterBottom>
                        <img src="/images/Logo.png" alt=" " />
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body1"
                        fontWeight="bold"
                        color="white"
                    >
                        Av. 99, 101 - Vila Aparecida
                        <br />
                        Rio Claro, SP 13000-000
                    </Typography>
                    <br />
                    <Typography variant="body1" fontWeight="bold" color="white">
                        (19) 9999-9999
                    </Typography>
                    <br />
                    <Typography variant="body1" fontWeight="bold" color="white">
                        contato@move.com.br
                    </Typography>
                </Box>
            </Container>
        </StyledFooter>
    )
}

export default Footer
