import { StaticImageData } from "next/image";

export interface Project {
    image: StaticImageData;
    projectName: string;
    techStack: string;
    projectUrl: string;
}