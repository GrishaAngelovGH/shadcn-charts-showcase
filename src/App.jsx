import { useState } from "react"

import Layout from "@/components/ui/layout"
import Sidebar from "@/components/ui/sidebar"

const Chart1 = () => <div>Chart 1</div>
const Chart2 = () => <div>Chart 2</div>

const charts = [
  Chart1,
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
