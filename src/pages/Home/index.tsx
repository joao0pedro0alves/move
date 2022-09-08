import StyledFooter from "../../components/Footer"
import Header from "../../components/Header"
import History from "../../components/History"
import HowItWorks from "../../components/HowItWorks"
import Services from "../../components/Services"

function Home() {
    return (
        <>
            <Header />
            <Services />
            <HowItWorks />
            <History />
            <StyledFooter />
        </>
    )
}

export default Home
