import {Box, Button, Typography} from "@mui/material"
import {ChevronRight} from "react-feather"
import {StyledContainer} from "./styles"

function History() {
    return (
        <section>
            <StyledContainer>
                <Box className="Video">
                    <img className="notebook" src="/images/notebook.png" />
                    <img className="play" src="/play.svg" />
                </Box>
                <Box>
                    <Typography
                        variant="h4"
                        component="h5"
                        fontWeight="bold"
                        gutterBottom
                    >
                        Faça sua mudança com segurança e sem dor de cabeça.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Em apenas alguns cliques você pode receber imediatamente
                        um orçamento com preço fixo personalizado de acordo com
                        suas necessidades.
                    </Typography>
                    <br />
                    <Typography variant="body1" gutterBottom>
                        Fazemos um esforço extra para garantir que você possa
                        relaxar completamente no dia da mudança. Já movemos mais
                        de 8.000 apenas no ano passado.
                    </Typography>
                    <br />

                    <Button size="large" endIcon={<ChevronRight />}>
                        Veja nossa história
                    </Button>
                </Box>
            </StyledContainer>
        </section>
    )
}

export default History
