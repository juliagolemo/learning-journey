import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function MyTimeline() {
  return (
    <VerticalTimeline lineColor="#FF6347">
      {/* Career Break */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={
          <img
            src={'/images/timeline/jula.webp'}
            alt="Career Break"
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Career Break</h3>
        <p>Professional Development</p>
      </VerticalTimelineElement>

      {/* Lufthansa - Junior HR Recruiter */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Dec 2023 - Sep 2024"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={
          <img
            src={'/images/timeline/lufthansa2.png'}
            alt="Lufthansa"
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Junior HR Recruiter</h3>
        <h4 className="vertical-timeline-element-subtitle">Lufthansa · Full-time</h4>
        <p>Kraków, Lesser Poland, Poland · Hybrid</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Oct 2024 - Jun 2026"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={
          <img
            src={'/images/timeline/uken2.png'}
            alt="University Logo"
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Master's degree, German Language and Literature
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of the National Education Commission, Krakow
        </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Oct 2021 - Oct 2023"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={
          <img
            src={'/images/timeline/uj_logo3.png'}
            alt="University Logo"
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor's degree, German Language and Literature
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Jagiellonian University</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Mar 2022 - Aug 2022"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={
          <img
            src={'/images/timeline/UoK.png'}
            alt="University Logo"
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Bachelor's degree, German Studies</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Cologne</h4>
        <p>Student Exchange Program</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default MyTimeline;
