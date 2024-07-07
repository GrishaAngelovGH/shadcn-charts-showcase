import { useState } from "react"

import Layout from "@/components/ui/layout"
import Sidebar from "@/components/ui/sidebar"

import AreaChart from "@/components/ui/charts/area-chart"
import LinearAreaChart from "@/components/ui/charts/linear-area-chart"
import StepAreaChart from "@/components/ui/charts/step-area-chart"

const charts = [
  AreaChart,
  LinearAreaChart,
  StepAreaChart
]

function App() {
  const [index, setIndex] = useState(0)

  const Component = charts[index]

  return (
    <Layout sidebar={<Sidebar onClick={setIndex} />}>
      <Component />
    </Layout>
  )
}

export default App
