import { Briefcase, Building, HandCoins, HandPlatter, Sprout } from "lucide-react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

export default function Timeline() {
  return (
   <>
    <div className="w-full lg:w-[85%] mt-8 p-4 lg:mt-16 bg-[#E9E6DF]/15">
        <h1 className="text-lg font-bold text-center lg:text-2xl lg:mb-8">Our Awards & Milestones</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2024"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<Building />}
          >
            <h3 className="vertical-timeline-element-title">
              Best Luxury Real Estate Agency
            </h3>
            <p>Honored for outstanding service in high-end property sales</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Briefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Innovative Property Design Award
            </h3>
            <p>
              Recognized for groundbreaking architectural excellence and modern
              living solutions
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023"
            iconStyle={{ background: "#F2BC4E", color: "#fff" }}
            icon={<HandCoins />}
          >
            <h3 className="vertical-timeline-element-title">
              Top Investment Realty Firm
            </h3>
            <p>
              Awarded for providing strategic, high-yield real estate
              investments
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022"
            iconStyle={{ background: "#547E3B", color: "#fff" }}
            icon={<Sprout />}
          >
            <h3 className="vertical-timeline-element-title">
              Sustainable Living Excellence
            </h3>
            <p>
              Celebrated for eco-friendly homes and green building initiatives
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(233, 30, 99)" }}
            date="2022"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<HandPlatter />}
          >
            <h3 className="vertical-timeline-element-title">
              Customer Choice Award – Best Real Estate Service
            </h3>
            <p>Rated #1 for personalized service and client satisfaction</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
   </>
  );
}