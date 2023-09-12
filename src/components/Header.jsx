import profile from "../assets/profile.webp"

const Header = () => {
  return (
    <div className="py-8 bg-gray-300 flex flex-col gap-6 px-60">
      <div className="flex justify-between items-center">
        <div>
          <img
            className="h-56 w-56 rounded-full"
            src={profile}
          />
        </div>
        <div className="flex flex-col gap-3 items-end">
          <h1 className="text-3xl font-bold">SANJAY KUMAR P</h1>
          <h1 className="text-xl">Frontend Developer</h1>
          <h1 className="text-xl">@DevRev</h1>
          <button className="text-xl btn">contact me</button>
        </div>
      </div>
      <div className="flex justify-center gap-12 w-1/3 mx-auto bg-slate-600 text-white py-4 text-xl rounded-md">
        <h1 className="link">Profile</h1>
        <h1 className="link">About me</h1>
        <h1 className="link">Contact Us</h1>
      </div>

      <div className="fixed bottom-8 right-8 animate-bounce bg-blue-500 h-16 w-32 rounded-md flex items-center justify-center text-white font-bold cursor-pointer">Chat!</div>
    </div>
  )
}
export default Header
