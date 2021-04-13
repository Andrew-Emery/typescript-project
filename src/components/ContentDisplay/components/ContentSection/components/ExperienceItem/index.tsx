import React, { useState } from 'react';
import { ExperienceModel, SkillId, skillData } from '../../../../../../data/data';
import './style.css';

interface PropsModel {
    data: ExperienceModel;
}

export const ExperienceItem = ({ data }: PropsModel) => {
    const [flip, setFlip] = useState(false);

    return (
        <div className="experience-item">
            <div className={flip ? 'button expanded-button' : 'button collapsed-button'} onClick={() => {
                setFlip(!flip)
            }}>
                &gt;
            </div>
            { data.name }
            {
                flip && (   
                    <div>
                        <div className="skill-pill-container">
                            { data.skills.map((skill) => <SkillPill id={skill} />) }
                        </div>
                        { data.description }
                    </div>
                )
            }
        </div>

    )
}

interface PillPropsModel {
    id: SkillId;
}

export const SkillPill = ({ id }: PillPropsModel) => {
    const skill = skillData[id];
    return (
        <div className="skill-pill" style={{ backgroundColor: skill.color }}>{ skill.displayName }</div>
    );
}