
import LineChart from "./components/LineChart"
import Navbar from "./components/Navbar"
import PriceOptions from "./components/PriceOptions"
export default function App() {
  return (
    <main className="container mx-auto primary-font">
      <Navbar/>
      <PriceOptions/>
     <LineChart/>
    </main>
  )
}