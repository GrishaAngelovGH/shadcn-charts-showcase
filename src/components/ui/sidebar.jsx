import { Button } from "@/components/ui/button"

const Sidebar = ({ onClick }) => {
  const items = [
    {
      label: "Area Charts",
      buttons: [
        "Area Chart",
        "Linear Area Chart",
        "Step Area Chart",
        "Stacked Area Chart",
        "Stacked Expanded Area Chart",
        "Legend Area Chart",
        "Icons Area Chart",
        "Gradient Area Chart",
        "Axes Area Chart",
        "Interactive Area Chart"
      ]
    }
  ]

  return (
    <div className="p-3 flex flex-col gap-5 min-h-full overflow-auto max-h-10">
      {
        items.map((v, i) => (
          <div key={i}>
            <div className="bg-blue-500 text-white p-2 rounded-full text-center">
              {v.label} ({v.buttons.length})
            </div>
            {
              v.buttons.map((v, i) => (
                <Button
                  key={i}
                  onClick={() => { onClick(i) }}
                  variant="secondary"
                  className="mt-2 w-full"
                >
                  {v}
                </Button>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar