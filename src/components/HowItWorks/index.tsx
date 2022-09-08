import {
    Box,
    Button,
    Divider,
    Step,
    StepLabel,
    Stepper,
    Typography,
} from "@mui/material"
import {StyledContainer} from "./styles"

const steps = [
    {
        title: "1.Insira seus detalhes de movimentação",
        imagePath: "/images/icons/Home.png",
        content:
            "Adicione os detalhes da mudança e obtenha o preço pela mudança imediatamente",
    },
    {
        title: "2. Organize tudo em um só lugar.",
        imagePath: "/images/icons/Warehouse.png",
        content:
            "Vamos ajudá-lo a criar uma lista de coisas para mover, vamos dominar isso juntos.",
    },
    {
        title: "3. Dia de mudança. Sem pressa.",
        imagePath: "/images/icons/SemiTruck.png",
        content:
            "No grande dia, nossos carregadores chegam e fazem todo o trabalho duro.",
    },
    {
        title: "4. Pague somente após a mudança",
        imagePath: "/images/icons/CardPayment.png",
        content:
            "Nossos funcionários irão descarregar seus pertences em sua nova casa",
    },
]

function HowItWorks() {
    return (
        <Box
            sx={{
                background: "#FFF",
            }}
        >
            <StyledContainer>
                <Box>
                    <Typography
                        component="h2"
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                    >
                        Como funciona ?
                        <Divider />
                    </Typography>
                    <Typography>
                        A move simplifica todo o processo de movimentação.
                    </Typography>
                </Box>
                <Box marginY="50px">
                    <Stepper orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepLabel>
                                    <Typography gutterBottom component="div">
                                        <img
                                            src={step.imagePath}
                                            width="100px"
                                            height="100px"
                                        />
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        fontWeight="bold"
                                    >
                                        {step.title}
                                    </Typography>
                                    <Typography
                                        maxWidth="250px"
                                        variant="body2"
                                    >
                                        {step.content}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <Box>
                    <Button size="large" variant="outlined">
                        Faça um orçamento Online
                    </Button>
                </Box>
            </StyledContainer>
        </Box>
    )
}

export default HowItWorks
