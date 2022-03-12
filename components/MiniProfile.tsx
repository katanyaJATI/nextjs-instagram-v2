function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="https://i.picsum.photos/id/1045/500/500.jpg?hmac=d4rd8hHTofnSdpOqI3UbZ5qBGqHcT5ebOjbbil6Cxn0"
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">Janaka Jati Lasmana</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-sm font-semibold text-red-400">Sign Out</button>
    </div>
  )
}

export default MiniProfile
