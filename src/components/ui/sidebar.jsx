import { Button } from "@/components/ui/button"

const Sidebar = ({ onClick }) => {
  const items = [
    {
      label: "Area Charts",
      buttons: [
        { label: "Area Chart", value: 0 },
        { label: "Linear Area Chart", value: 1 },
        { label: "Step Area Chart", value: 2 },
        { label: "Stacked Area Chart", value: 3 },
        { label: "Stacked Expanded Area Chart", value: 4 },
        { label: "Legend Area Chart", value: 5 },
        { label: "Icons Area Chart", value: 6 },
        { label: "Gradient Area Chart", value: 7 },
        { label: "Axes Area Chart", value: 8 },
        { label: "Interactive Area Chart", value: 9 }
      ]
    },
    {
      label: "Bar Charts",
      buttons: [
        { label: "Bar Chart", value: 10 }
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
              v.buttons.map(({ label, value }) => (
                <Button
                  key={i}
                  onClick={() => { onClick(value) }}
                  variant="secondary"
                  className="mt-2 w-full"
                >
                  {label}
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