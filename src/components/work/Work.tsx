import React from 'react'
import './Work.css'
import { WorkCard, WorkCardProps } from './work-card/WorkCard'

function getWorkCardElementFromProp(workCard: WorkCardProps) {
  return (
    <WorkCard
      title={workCard.title}
      description={workCard.description}
      timeRange={workCard.timeRange}
      company={workCard.company}
      key={workCard.toString()}
    />
  )
}

export const Work: React.FC<{}> = () => {
  let workCards: WorkCardProps[] = [
    {
      title: "Incoming Software Engineer",
      description: "Serverless web application",
      timeRange: "June 2020 - September 2020",
      company: "Amazon"
    },
    {
      title: "SDE Intern",
      description: "Serverless web application",
      timeRange: "June 2020 - September 2020",
      company: "Amazon"
    },
    {
      title: "Software Engineer Intern",
      description: "• Streamlined company’s auditing process by building a full-stack timetracking web app with JWT-secured REST API service using Angular, ASP.NET Core, MySQL and deployed as Docker containers to AWS." +
      "• Developed a monitoring web app used by the Sales and Support team using Angular, ASP.NET Core, SQL Server and hosted on Internet Information Services (IIS)." +
      "• Implemented a draggable and customizable KPI dashboard with data visualization using Angular and D3.js, and demoed the product concept to the CEO.",
      timeRange: "June 2019 - September 2019",
      company: "Accelya (Formerly Revenue Management Systems, Inc.)"
    }
  ]

  let leftWorkCards: JSX.Element[] = []
  let rightWorkCards: JSX.Element[] = []

  workCards.forEach((workCard, index) => {
    if (index % 2 == 0) {
      leftWorkCards.push(getWorkCardElementFromProp(workCard))
    }
    else {
      rightWorkCards.push(getWorkCardElementFromProp(workCard))
    }
  })

  return (
    <div id="work">
      <div className="work-header">
        <h4>relevant work experience</h4>
      </div>
      <div className="flex">
        <div className="left work-left-column">
          {leftWorkCards}
        </div>
        <div className="right work-right-column">
          {rightWorkCards}
        </div>
      </div>
    </div>
  )
}