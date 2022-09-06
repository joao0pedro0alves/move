import {
    useScrollTrigger,
    Slide,
    Toolbar,
    Box,
    AppBar as MuiAppBar,
} from "@mui/material"

function AppBar() {
    const trigger = useScrollTrigger({
        threshold: window.innerHeight,
    })

    return (
        <>
            <Slide appear={false} direction="down" in={trigger}>
                <MuiAppBar color="secondary" position="fixed">
                    <Toolbar>
                        <Box>
                            <img src="/images/Logo.png" alt=" " width="100px" />
                        </Box>
                    </Toolbar>
                </MuiAppBar>
            </Slide>

            {trigger && <Toolbar />}
        </>
    )
}

export default AppBar
