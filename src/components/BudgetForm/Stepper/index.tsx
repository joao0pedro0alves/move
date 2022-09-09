import React, {useState} from "react"
import theme from "../../../styles/theme"
import events from "../../../consts/events"
import client from "../../../services/eventEmitter"
import {CheckCircle} from "react-feather"
import {Step, StepButton, Box, Typography, Button} from "@mui/material"
import {StyledStepper} from "./styles"

const steps = [
    "Suas informações",
    "Itens da mudança",
    "Sua localização",
    "Localização Entrega",
]

export interface BudgetFormStepperProps {
    renderStepContent?: (step: number) => JSX.Element | null
    onClose: () => void
}

function BudgetFormStepper({onClose, ...props}: BudgetFormStepperProps) {
    const [activeStep, setActiveStep] = useState(0)
    const [completed, setCompleted] = useState<{
        [k: number]: boolean
    }>({})

    const totalSteps = () => steps.length

    const isLastStep = () => activeStep === totalSteps() - 1

    const allStepsCompleted = () => {
        const values = Object.values(completed)
        return (
            values.length === totalSteps() &&
            values.every((steps) => steps === true)
        )
    }

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((_, i) => !(i in completed))
                : activeStep + 1
        setActiveStep(newActiveStep)
    }

    const handleBack = () => {
        const newCompleted = {...completed}
        newCompleted[activeStep - 1] = false

        setCompleted(newCompleted)
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleStep = (step: number) => () => {
        setActiveStep(step)
    }

    const handleComplete = () => {
        const newCompleted = {...completed}
        newCompleted[activeStep] = true
        setCompleted(newCompleted)
        handleNext()
    }

    const handleReset = () => {
        setActiveStep(0)
        setCompleted({})
        onClose()
    }

    return (
        <>
            <StyledStepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </StyledStepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography>
                            <CheckCircle
                                color={theme.palette.success.main}
                                width="66px"
                                height="66px"
                                strokeWidth="1px"
                            />
                        </Typography>
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{mt: 2, mb: 1}}
                        >
                            Tudo pronto.
                            <br />
                            Em instantes você receberá o orçamento em seu email.
                        </Typography>
                        <Box marginTop="20px">
                            <Button
                                sx={{
                                    textTransform: "capitalize",
                                    minWidth: "200px",
                                }}
                                color="secondary"
                                variant="contained"
                                onClick={handleReset}
                            >
                                Fechar janela
                            </Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            gap: "4rem",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                            }}
                        >
                            {props.renderStepContent
                                ? props.renderStepContent(activeStep)
                                : null}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                pt: 2,
                            }}
                        >
                            <Button
                                size="large"
                                color="error"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{mr: 1}}
                            >
                                Voltar
                            </Button>
                            <Button
                                size="large"
                                variant="contained"
                                color="success"
                                onClick={handleComplete}
                            >
                                {isLastStep() ? "Finalizar" : "Próximo"}
                            </Button>
                        </Box>
                    </Box>
                )}
            </div>
        </>
    )
}

export default BudgetFormStepper
