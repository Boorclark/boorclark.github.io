import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
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
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
            date="May 2017 - July 2021"
          >
            <h3 className="vertical-timeline-element-title">
              Computer Technician
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Paris, Ky - Bourbon County Schools
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
            date="June 2021 - July 2021"
          >
            <h3 className="vertical-timeline-element-title">
              Technology Paraeducator
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Paris, Ky - Bourbon County Schools
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
            date="August 2021 - May 2022"
          >
            <h3 className="vertical-timeline-element-title">
              {" "}
              IT Support Technician
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Berea, Ky - Berea College IS&S
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
            date="June 2022 - August 2022"
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Berea, Ky - Berea College SSDT
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
            date="August 2022 - June 2023"
          >
            <h3 className="vertical-timeline-element-title">
              IT Support Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Berea, Ky - Berea College IS&S
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
            date="January 2023 - Present (Seasonal)"
          >
            <h3 className="vertical-timeline-element-title">
              IT Support Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Berea, Ky - Berea College IS&S
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
            date="April 2023 - Present"
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Remote - KC7 Foundation
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(234, 88, 12)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(234, 88, 12)" }}
            date="May 2023 - August 2023"
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Remote - National Information Solutions Cooperative
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
