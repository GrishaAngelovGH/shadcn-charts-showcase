import { useState } from "react"

import Layout from "@/components/ui/layout"
import Sidebar from "@/components/ui/sidebar"

import AreaChart from "@/components/ui/charts/area-chart"

const Chart2 = () => <div>Chart 2</div>

const charts = [
  AreaChart,
  Chart2
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
