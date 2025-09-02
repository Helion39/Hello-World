import React from "react";
import { Skill } from "@/types";
import { FaReact, FaJava, FaPhp, FaDatabase, FaAndroid, FaGitAlt } from "react-icons/fa";
import { SiFirebase, SiWireshark, SiJavascript } from "react-icons/si";

export const skills: Skill[] = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
  { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
  { name: "MySQL", icon: <FaDatabase className="text-[#4479A1]" /> },
  { name: "Android Studio", icon: <FaAndroid className="text-[#3DDC84]" /> },
  { name: "Wireshark", icon: <SiWireshark className="text-[#1679A7]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
];