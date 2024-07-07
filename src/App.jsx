import { useState } from "react"

import Layout from "@/components/ui/layout"
import Sidebar from "@/components/ui/sidebar"

import charts from "@/components/ui/charts"

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
