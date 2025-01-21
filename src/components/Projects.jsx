import React from "react"
import ProjectCard from "./ProjectCard" // Fixed import statement

const App = () => {
  const projectData = {
    title: "Eternal Key",
    description: "The next generation of digital asset inheritance. Secure, automated, and decentralized on Solana.",
    date: "November 2024",
    content: "This is how you inherit your cryptocurrency. Backed by Solana Foundation.",
    skills: ["Next.js", "Rust", "Anchor", "TypeScript"],
    websiteUrl: "#",
  }

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <ProjectCard data={projectData} />
    </div>
  )
}

export default App

