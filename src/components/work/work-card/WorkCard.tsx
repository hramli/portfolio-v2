import React from 'react'
import './WorkCard.css'

export interface WorkCardProps {
  title: string
  description: string
  timeRange: string
  company: string
}

export const WorkCard: React.FC<WorkCardProps> = (props) => {
  return (
    <div className="work-card">
      <div className="work-card-title">
        <h5>{props.title}</h5>
        <div className="work-card-description">
          {props.description}
        </div>
      </div>
    </div>
  )
}
