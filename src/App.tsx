import {ThemeProvider, CssBaseline} from "@mui/material"
import theme from "./styles/theme"
import Layout from "./pages/Layout"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout />
        </ThemeProvider>
    )
}

export default App
