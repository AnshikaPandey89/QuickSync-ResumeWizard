/** @jsxImportSource @emotion/react */

import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef } from 'react'; 
import React, { useState } from 'react';
import Image from 'next/image';
import Editor from './editor';
import ResumeD from "./ResumeD.jsx";
import ReactToPrint from "react-to-print";

const sections = {
  basicInfo: "Basic Info",
  workExp: "Work Experience",
  project: "Projects",
  education: "Education",
  achievement: "Achievements",
  skills: "Skills",
  other: "Other",
};

const Navbar = () => (
  <nav className="bg-slate-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-semibold">Resume Wizard</div>
      <div>
        <a href="#home" className="mx-2 hover:text-violet-300">Home</a>
        <a href="#editor" className="mx-2 hover:text-violet-300">Editor</a>
        <a href="#download" className="mx-2 hover:text-violet-300">Download</a>
        <a href="#quick-guide" className="mx-2 hover:text-violet-300">Quick Guide</a>
      </div>
    </div>
  </nav>
);

const Resume = () => {
  const resumeRef = useRef();
  const editorRef = useRef(null);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  const scrollToEditor = () => {
    editorRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <div id="home" className="flex flex-row items-center justify-around w-full border-pink-400 m-4 p-2">
        <div className="text-2xl font-semibold text-center flex-col justify-center pt-28 px-4 font-serif animate-fade w-76">
          <p className="quote-line text-violet-300">
            "Your skills and experiences are unique
          </p>
          <p className="quote-line text-violet-300">
            let your{' '}
            <span className="font-mono text-transparent bg-clip-text bg-gradient-to-b from-blue-100 to-pink-500 text-4xl animate-pulse">
              Resume
            </span>{' '}
            reflect that"
          </p>
          <button 
            className='mt-4 py-1 px-2 text-violet-200 border border-violet-200 bg-slate-700 rounded-md font-thin font-mono'
            onClick={scrollToEditor}
          >
            Start building
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/undraw_online_resume_re_ru7s.svg"
            width={500}
            height={500}
            alt="logo-img"
            className="rounded-lg p-4 align-middle"
          />
        </div>
      </div>
      <div id="quick-guide" className="mt-16">
        <div className="container mx-auto px-10">
  
          <div id="quick-guide" className="mt-8">
  <div className="container mx-auto px-4">
    <h3 className="text-3xl font-semibold mb-4 ">Quick Guide</h3>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
      <div className="bg-zinc-500 p-4 rounded-lg">
        <h4 className="font-bold text-slate-800">Step 1:</h4>
        <p>Click the <strong>Start building</strong> button to open the editor.</p>
      </div>
      <div className="bg-zinc-500 p-4 rounded-lg">
        <h4 className="font-bold text-slate-800">Step 2:</h4>
        <p>Fill in your <strong>Basic Information</strong> such as name and contact details.</p>
      </div>
      <div className="bg-zinc-500 p-4 rounded-lg">
        <h4 className="font-bold text-slate-800">Step 3:</h4>
        <p>Add your <strong>Work Experience</strong> and <strong>Projects</strong>.</p>
        <p>(You can add Multiple Experiences and projects)</p>
      </div>
      <div className="bg-zinc-500 p-4 rounded-lg">
        <h4 className="font-bold text-slate-800">Step 4:</h4>
        <p>Include your <strong>Education</strong> details and any <strong>Achievements</strong>.</p>
      </div>
      <div className="bg-zinc-500 p-4 rounded-lg">
        <h4 className="font-bold text-slate-800">Step 5:</h4>
        <p>List your <strong>Skills</strong> and any other relevant information in the <strong>Other</strong> section.</p>
      </div>
      <div className="bg-zinc-500 p-4 rounded-lg">
        <h4 className="font-bold text-slate-800">Step 6:</h4>
        <p>Once done, click the <strong>Download</strong> button to save your resume as a PDF.</p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      <div ref={editorRef} id="editor">
        <Editor 
          sections={sections} 
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
      </div>
      <div className="flex items-center justify-center mt-6" id="download">
        <ReactToPrint
          trigger={() => {
            return (
              <button className="px-3 py-1 mb-6 rounded-lg bg-slate-700 text-white outline-none font-medium text-base space-x-1 items-center cursor-pointer transition duration-200 hover:bg-indigo-700">
                Download 
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <ResumeD 
        ref={resumeRef}
        information={resumeInformation}
        sections={sections}
      />
    </div>
  );
};

export default Resume;
