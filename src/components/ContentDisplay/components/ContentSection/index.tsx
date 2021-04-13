import React from 'react';
import { experiences } from '../../../../data/data';
import { ExperienceItem } from './components/ExperienceItem';
import './style.css';

export const ContentSection = () => {
    return (
        <div className="container-space">
            <div className="content-container">
                {
                    experiences.map(experience => <ExperienceItem data={experience} />)
                }
            </div>
        </div>
    )
}