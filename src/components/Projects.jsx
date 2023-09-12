import thumbnail from "../assets/thumbnail.webp"

const projects = [
  "Project Title 1",
  "Project Title 2",
  "Project Title 3",
  "Project Title 4",
  "Project Title 5",
  "Project Title 6",
]

const Projects = () => {
  return (
    <div className="mt-16 px-60">
      <h1 className="text-center text-5xl pb-6 border-b-2 border-b-gray-400">
        Projects/Experiences
      </h1>

      <div className="grid grid-cols-3 gap-8 mt-16">
        {projects.map((item) => (
          <div className="shadow-lg hover:scale-105 transition-all duration-300 flex flex-col gap-4 pb-8 rounded-md">
            <div>
              <img src={thumbnail} />
            </div>
            <h1 className="text-2xl pl-4">{item}</h1>
            <h1 className="text-lg pl-4">This projects includes MERN stack</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Projects
