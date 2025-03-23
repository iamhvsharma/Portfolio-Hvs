import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectCard = ({ project }) => {
  return (
    <Card className="w-full max-w-[380px] h-full bg-white text-gray-800 border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Section with hover effect */}
      <div className="relative h-[180px] w-full overflow-hidden">
        <div 
          className="h-full w-full bg-cover bg-center absolute inset-0 transition-transform duration-500 hover:scale-110" 
          style={{ backgroundImage: `url(${project.image || "/default-image.jpg"})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/70 to-transparent"></div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{project.description}</p>
      </CardHeader>
      
      <CardContent className="pb-0">
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md border border-gray-200">{tech}</span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2 mt-4">
        {project.website && (
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href={project.website} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </Button>
        )}
        {project.github && (
          <Button variant="outline" asChild className="text-gray-700 border-gray-300 hover:bg-gray-50">
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;