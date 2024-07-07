const Layout = ({ sidebar, children }) => (
  <div className="min-h-screen flex">
    <div className="w-1/5 bg-blue-200 border-blue-300 border-r-2">{sidebar}</div>
    <div className="w-4/5 bg-gray-300 min-h-full flex justify-center items-center">{children}</div>
  </div>
)

export default Layout