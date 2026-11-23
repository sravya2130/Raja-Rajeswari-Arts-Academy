import React from 'react';
import { FaUsers, FaAward, FaClock, FaStar } from 'react-icons/fa';

const Stats = () => {
  const data = [
    {
      icon: <FaUsers />,
      number: '3000+',
      text: 'Students Trained'
    },
    {
      icon: <FaAward />,
      number: '30+',
      text: 'Years of Excellence'
    },
    {
      icon: <FaClock />,
      number: '5+',
      text: 'Class Timing Options'
    },
  ];

  return (
    <section className='stats'>
      {data.map((item, index) => (
        <div className='stat-card' key={index}>
          <div className='icon'>{item.icon}</div>
          <h2>{item.number}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;