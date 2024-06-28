import React from 'react'
import Education from './Education/Education'
import WorkExp from './WorkExp/WorkExp';
import './EducationWorkExp.css';

export default function EducationWorkExp() {
  return (
    <div className='EducationWorkExp_container'>
        <div><Education /></div>
        <div><WorkExp /></div>
    </div>
  )
}
