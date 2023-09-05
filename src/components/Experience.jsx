import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const timelineItems = [
    {
      date: "May 2017 - July 2021",
      title: "Computer Technician",
      location: "Paris, Ky - Bourbon County Schools",
    },
    {
      date: "June 2021 - July 2021",
      title: "Technology Paraeducator",
      location: "Paris, Ky - Bourbon County Schools",
    },
    {
      date: "August 2021 - May 2022",
      title: "IT Support Technician",
      location: "Berea, Ky - Berea College IS&S",
    },
    {
      date: "June 2022 - August 2022",
      title: "Software Developer Intern",
      location: "Berea, Ky - Berea College SSDT",
    },
    {
      date: "August 2022 - January 2023",
      title: "IT Support Manager",
      location: "Berea, Ky - Berea College IS&S",
    },
    {
      date: "January 2023 - Present (Seasonal)",
      title: "IT Support Director",
      location: "Berea, Ky - Berea College IS&S",
    },
    {
      date: "April 2023 - Present",
      title: "Software Engineer Intern",
      location: "Remote - KC7 Foundation",
    },
    {
      date: "May 2023 - August 2023",
      title: "Software Developer Intern",
      location: "Remote - National Information Solutions Cooperative",
    },
  ];

  const timelineElementStyle = {
    background: "rgb(234, 88, 12)",
    color: "#fff",
    contentArrowStyle: { borderRight: "7px solid rgb(234, 88, 12)" },
    contentStyle: { background: "rgb(234, 88, 12)", color: "#fff" },
  };

  return (
    <div name="experience" className="w-full bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 ">
            Experience
          </p>
          <p className="py-4">
            // This is the full timeline of my tech-related work experience 
          </p>
        </div>
        <VerticalTimeline>
          {timelineItems.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={item.date}
              {...timelineElementStyle}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.location}
              </h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
