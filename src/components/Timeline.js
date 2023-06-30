import { timeline } from "./content";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineItemClasses,
} from "@mui/lab";
import { Typography } from "@mui/material";

const MyTimelineItem = ({ name, startDate, endDate, isLast }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent className="timeline-content">
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">
          {startDate} - {endDate}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const AboutTimeline = () => {
  return (
    <div className="timeline">
      <h2>Timeline</h2>
      <div>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {timeline.map((item, index) => {
            return (
              <MyTimelineItem
                {...item}
                isLast={index === timeline.length - 1}
              />
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default AboutTimeline;
