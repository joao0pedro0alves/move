import {Box, Button, Typography} from "@mui/material"
import {ChevronRight} from "react-feather"
import client from "../../services/eventEmitter"
import events from "../../consts/events"
import {Cover, StyledContainer} from "./styles"

function Header() {
    const handleOpenBudgetForm = () => {
        client.emit(events.budgetForm.open)
    }

    return (
        <>
            <Cover>
                <StyledContainer>
                    <Box marginBottom="2rem">
                        <img src="/images/Logo.png" alt=" " />
                    </Box>
                    <Box>
                        <Typography
                            fontWeight="bold"
                            component="h1"
                            variant="h2"
                            color="white"
                            gutterBottom
                        >
                            Mudar-se nunca foi tão fácil antes.
                        </Typography>
                        <Typography
                            display="block"
                            component="h2"
                            variant="h5"
                            color="white"
                            gutterBottom
                        >
                            Ajuda você a planejar, reservar toda a sua mudança
                            do
                            <br />
                            conforto da sua casa.
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        gap="2rem"
                        flexWrap="wrap"
                        marginTop="3rem"
                    >
                        <Button
                            size="large"
                            variant="contained"
                            onClick={handleOpenBudgetForm}
                        >
                            Faça um orçamento
                        </Button>
                        <Button
                            endIcon={<ChevronRight />}
                            size="large"
                            variant="text"
                        >
                            Saiba Mais
                        </Button>
                    </Box>
                </StyledContainer>
            </Cover>
        </>
    )
}

export default Header
