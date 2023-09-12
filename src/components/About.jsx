const About = () => {
  return (
    <div className="my-16 bg-gray-300 px-60 py-16">
      <h1 className="text-center text-3xl">About me</h1>

      <div className="flex gap-6 py-8">
        <div className="w-1/2 p-6 bg-white about">
          <h1 className="text-center border-b-2 border-b-black pb-2">
            Personal Details
          </h1>
          <ul>
            <li>Name: SANJAY KUMAR P</li>
            <li>DOB: 17-Jan-2003</li>
            <li>Location: Chennai</li>
            <li>Phone: +91 9962168492</li>
          </ul>
        </div>

        <div className="w-1/2 p-6 bg-black text-white about">
          <h1 className="text-center border-b-2 border-b-white pb-2">
            Education/Skillset
          </h1>
          <ul>
            <li>B.E. Computer Science and Engineering</li>
            <li>Web Development</li>
            <li>MERN FullStack</li>
            <li>HTML, CSS and Javascript</li>
            <li>Machine Learning</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default About
