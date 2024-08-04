import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import Hero from "../components/Hero"
import NavBar from "../components/NavBar"

const ErrorPage = () => {
  return (
    <>
    <NavBar />
    <Hero>
      <Banner title="404" subtitle="page not found" >
        <Link to='/' className="btn-primary" >Return Home</Link>
      </Banner>
    </Hero>
    </>
  )
}

export default ErrorPage