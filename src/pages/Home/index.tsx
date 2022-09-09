import Footer from "../../components/Footer"
import BudgetForm from "../../components/BudgetForm"
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
            <Footer />
            <BudgetForm />
        </>
    )
}

export default Home
