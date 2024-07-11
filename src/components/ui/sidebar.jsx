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
        { label: "Bar Chart", value: 10 },
        { label: "Horizontal Bar Chart", value: 11 },
        { label: "Multiple Bar Chart", value: 12 },
        { label: "Label Bar Chart", value: 13 },
        { label: "Custom Bar Chart", value: 14 },
        { label: "Mixed Bar Chart", value: 15 },
        { label: "Stacked Legend Bar Chart", value: 16 },
        { label: "Active Bar Chart", value: 17 },
        { label: "Negative Bar Chart", value: 18 },
        { label: "Interactive Bar Chart", value: 19 }
      ]
    },
    {
      label: "Line Charts",
      buttons: [
        { label: "Line Chart", value: 20 },
        { label: "Linear Line Chart", value: 21 },
        { label: "Step Line Chart", value: 22 },
        { label: "Multiple Line Chart", value: 23 },
        { label: "Dots Line Chart", value: 24 },
        { label: "Custom Dots Line Chart", value: 25 },
        { label: "Dots Colors Line Chart", value: 26 },
        { label: "Label Line Chart", value: 27 },
        { label: "Custom Label Line Chart", value: 28 },
        { label: "Interactive Line Chart", value: 29 }
      ]
    },
    {
      label: "Pie Charts",
      buttons: [
        { label: "Pie Chart", value: 30 },
        { label: "Separator None Pie Chart", value: 31 },
        { label: "Label Pie Chart", value: 32 },
        { label: "Custom Label Pie Chart", value: 33 },
        { label: "Label List Pie Chart", value: 34 },
        { label: "Legend Pie Chart", value: 35 },
        { label: "Doughnut Pie Chart", value: 36 },
        { label: "Active Doughnut Pie Chart", value: 37 },
        { label: "Doughnut With Text Pie Chart", value: 38 },
        { label: "Stacked Pie Chart", value: 39 },
        { label: "Interactive Pie Chart", value: 40 }
      ]
    },
    {
      label: "Radar Charts",
      buttons: [
        { label: "Radar Chart", value: 41 },
        { label: "Dots Radar Chart", value: 42 },
        { label: "Multiple Radar Chart", value: 43 },
        { label: "Lines Only Radar Chart", value: 44 },
        { label: "Custom Label Radar Chart", value: 45 },
        { label: "Radius Axis Radar Chart", value: 46 },
        { label: "Grid Custom Radar Chart", value: 47 },
        { label: "Grid Filled Radar Chart", value: 48 },
        { label: "Grid None Radar Chart", value: 49 },
        { label: "Grid Circle Radar Chart", value: 50 },
        { label: "No Lines Grid Circle Radar Chart", value: 51 },
        { label: "Grid Circle Filled Radar Chart", value: 52 },
        { label: "Legend Radar Chart", value: 53 },
        { label: "Icons Radar Chart", value: 54 }
      ]
    },
    {
      label: "Radial Charts",
      buttons: [
        { label: "Radial Chart", value: 55 },
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
                  key={value}
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