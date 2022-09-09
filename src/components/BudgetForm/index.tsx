import {useState, useEffect} from "react"
import clsx from "clsx"
import client from "../../services/eventEmitter"
import events from "../../consts/events"
import {Box, Grid, Typography} from "@mui/material"
import {StyledCollapse, StyledContainer, StyledBackdrop} from "./styles"

import Input from "../Input"
import Select from "../Select"
import BudgetFormStepper from "./Stepper"

function BudgetForm() {
    const [open, setOpen] = useState(true)
    const backdropId = "budget-form-backdrop"

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    const handleCloseBackdrop = (e: any) => {
        const isBackdrop = e.target.id === backdropId
        if (isBackdrop) handleClose()
    }

    useEffect(() => {
        client.on(events.budgetForm.open, handleOpen)
        client.on(events.budgetForm.close, handleCloseBackdrop)

        return () => {
            client.removeEventListener(events.budgetForm.open, handleOpen)
            client.removeEventListener(
                events.budgetForm.close,
                handleCloseBackdrop
            )
        }
    }, [])

    const renderStepContent = (step: number) => {
        const renderFields = () => {
            switch (step) {
                case 0:
                    return (
                        <>
                            <Grid item xs={6}>
                                <Input
                                    autoFocus
                                    fullWidth
                                    color="secondary"
                                    label="Nome"
                                    placeholder="Ex: João Pedro"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    fullWidth
                                    color="secondary"
                                    label="Sobrenome"
                                    placeholder="Ex: Alves"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    fullWidth
                                    color="secondary"
                                    label="Email"
                                    placeholder="jhon@doe.com.br"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    fullWidth
                                    color="secondary"
                                    label="Telefone"
                                    inputMode="tel"
                                    placeholder="(19) 9999-9999"
                                />
                            </Grid>
                        </>
                    )
                case 1:
                    return (
                        <>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    color="secondary"
                                    label="Tamanho da mudança"
                                    placeholder=""
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    color="secondary"
                                    label="Tipo da mudança"
                                    placeholder=""
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    fullWidth
                                    color="secondary"
                                    label="Descrição dos móveis"
                                    placeholder="Descrição dos seus móveis"
                                    multiline
                                    rows={5}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    fullWidth
                                    color="secondary"
                                    label="Obervações / comentários"
                                    placeholder="Suas obervações..."
                                    multiline
                                    rows={5}
                                />
                            </Grid>
                        </>
                    )
                case 2:
                    return (
                        <>
                            <Grid item xs={12}>
                                <Input
                                    autoFocus
                                    fullWidth
                                    color="secondary"
                                    label="Endereço para retirada"
                                    placeholder="Ex: Rua 123, n 9, Centro"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    fullWidth
                                    color="secondary"
                                    label="Cidade"
                                    placeholder="Campo Grande"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    color="secondary"
                                    label="Estado"
                                    placeholder=""
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    fullWidth
                                    color="secondary"
                                    label="CEP"
                                    inputMode="numeric"
                                    placeholder=""
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    type="date"
                                    fullWidth
                                    color="secondary"
                                    label="Data do envio"
                                    inputMode="numeric"
                                    placeholder=""
                                />
                            </Grid>
                        </>
                    )
                case 3:
                    return (
                        <>
                            <Grid item xs={12}>
                                <Input
                                    autoFocus
                                    fullWidth
                                    color="secondary"
                                    label="Endereço de entrega"
                                    placeholder="Ex: Rua 123, n 9, Centro"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    fullWidth
                                    color="secondary"
                                    label="Cidade"
                                    placeholder="Campo Grande"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Select
                                    fullWidth
                                    color="secondary"
                                    label="Estado"
                                    placeholder=""
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Input
                                    fullWidth
                                    color="secondary"
                                    label="CEP"
                                    inputMode="numeric"
                                    placeholder=""
                                />
                            </Grid>
                        </>
                    )
                default:
                    return null
            }
        }

        return (
            <Grid container spacing={3}>
                {renderFields()}
            </Grid>
        )
    }

    return (
        <StyledBackdrop
            id={backdropId}
            open={open}
            onClick={handleCloseBackdrop}
        >
            <StyledCollapse className={clsx({in: open})}>
                <StyledContainer>
                    <Typography variant="h4" fontWeight="bold">
                        Vamos começar ?
                    </Typography>
                    <Box>
                        <form>
                            <BudgetFormStepper
                                renderStepContent={renderStepContent}
                                onClose={handleClose}
                            />
                        </form>
                    </Box>
                </StyledContainer>
            </StyledCollapse>
        </StyledBackdrop>
    )
}

export default BudgetForm
