import { Button } from "@/components/ui/button"

const Sidebar = ({ onClick }) => {
  const buttons = [
    "Area Chart",
    "Linear Area Chart",
    "Step Area Chart",
    "Stacked Area Chart",
    "Stacked Expanded Area Chart",
    "Legend Area Chart",
    "Icons Area Chart"
  ]

  return (
    <div className="p-3 flex flex-col gap-5">
      {
        buttons.map((v, i) => (
          <Button
            key={i}
            onClick={() => { onClick(i) }}
            variant="secondary"
          >
            {v}
          </Button>
        ))
      }
    </div>
  )
}

export default Sidebar