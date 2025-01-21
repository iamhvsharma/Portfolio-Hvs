import { useEffect, useRef } from "react"
import { FaDiscord, FaGlobe } from "react-icons/fa"

const ProjectCard = ({ data }) => {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="fade-in-slide-up w-full max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out p-6 border border-gray-100"
    >
      {/* Beta Badge */}
      <div className="flex justify-end mb-4">
        <button className="px-4 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2">
          ✨ Join the beta
        </button>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-3">{data.title}</h1>

      {/* Description */}
      <p className="text-gray-600 text-lg mb-6">{data.description}</p>

      {/* Discord Button */}
      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg mb-6 hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center gap-2">
        <FaDiscord className="text-xl" />
        Connect
      </button>

      {/* Project Info */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-500 mb-4">{data.date}</p>
        <p className="text-gray-600">{data.content}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Website Link */}
      <a
        href={data.websiteUrl}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200"
      >
        <FaGlobe className="text-gray-600" />
        <span className="font-medium">Website</span>
      </a>
    </div>
  )
}

// Add the required animation styles
const style = document.createElement("style")
style.textContent = `
  .fade-in-slide-up {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }

  .fade-in-slide-up.show {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`
document.head.appendChild(style)

export default ProjectCard

