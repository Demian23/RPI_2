import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {ReactComponent as PenIcon} from "../../../icons/TimeLine/pen.svg";
import {ReactComponent as ChildhoodIcon} from "../../../icons/TimeLine/childhood.svg";
import {ReactComponent as BuildingIcon} from "../../../icons/TimeLine/building.svg";
import {ReactComponent as StudyingIcon} from "../../../icons/TimeLine/studying.svg";
import poetsTimeLines from "../../../content/poetsTimeLines";

const iconsMap = new Map([['pen', {background: 'rgb(243,213,169)', color: '#ffffff', style: <PenIcon/>}],
                                    ['childhood', {background: 'rgb(243,158,68)', color: '#2d2724', style: <ChildhoodIcon/>}],
                                    ['building', {background: 'rgb(133,89,21)', color: '#2d2724', style: <BuildingIcon/>}],
                                    ['studying', {background: 'rgb(231,184,105)', color: '#2d2724', style: <StudyingIcon/>}]]);

const TimeLine = (props) => {
    return (
        <VerticalTimeline
            lineColor={'rgb(211,150,67)'}
            >
            {poetsTimeLines[props.number - 1]?.map((timeLineElement) =>{
                const background = iconsMap.get(timeLineElement.icon).background
                const color = iconsMap.get(timeLineElement.icon).color
                const style = {background, color}
                return (
                <VerticalTimelineElement
                    key={timeLineElement.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{background: 'rgb(141,109,48)', color: '#ffffff'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(141,109,48)'}}
                    date= {timeLineElement.date}
                    iconStyle={style}
                    icon={iconsMap.get(timeLineElement.icon).style}
                >
                <h3 className="vertical-timeline-element-title">{timeLineElement.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{timeLineElement.subTitle}</h4>
                <p>
                    {timeLineElement.description}
                </p>
                </VerticalTimelineElement>);
            })}
        </VerticalTimeline>
    );
};

export default TimeLine;