import {Container, Box, Typography} from "@mui/material"
import {PhoneCall, Shield, DollarSign} from "react-feather"
import Service from "../Service"

function Services() {
    return (
        <>
            <Container>
                <Box
                    paddingY="130px"
                    textAlign="center"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box marginBottom="50px">
                        <Typography
                            color="primary"
                            letterSpacing="0.1rem"
                            variant="subtitle1"
                            gutterBottom
                        >
                            NOSSOS SERVIÇOS
                        </Typography>
                        <Typography
                            color="secondary"
                            component="h2"
                            variant="h2"
                            fontWeight="bold"
                            gutterBottom
                        >
                            Serviço personalizado
                        </Typography>
                    </Box>
                    {/* ==== SERVICES ==== */}
                    <Box display="flex" gap="21.26px" flexWrap="wrap">
                        <Service
                            Icon={PhoneCall}
                            title="Atendimento personalizado"
                            content="Reserva simples online, economize tempo e aborrecimento sem visitas domiciliares"
                        />
                        <Service
                            Icon={Shield}
                            title="Transporte com seguro premium"
                            content="Oferecemos os melhores seguros do mercado. Cada um de nossos movimentos é coberto por um transporte premium abrangente."
                        />
                        <Service
                            Icon={DollarSign}
                            title="Totalmente transparente"
                            content="Preços transparentes para todos os serviços. Não precisa ser caro. Nós sabemos."
                        />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Services
