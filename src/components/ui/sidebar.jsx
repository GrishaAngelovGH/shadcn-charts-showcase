import { Button } from "@/components/ui/button"

const Sidebar = ({ onClick }) => {
  const buttons = [
    "Area Chart",
    "Chart 2"
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