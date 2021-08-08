import React, {useEffect, useRef} from 'react';
import './home.scss';
import {Chart1} from '../components/chart1';
import {Chart2} from '../components/chart2';

export const Home = () => {

  return (
    <div className="home">
      <main>
        <section className="section1">
          <Chart1/>
        </section>
        <section className="section2">
          <Chart2/>
        </section>
        <section className="section3"></section>
        <section className="section4"></section>
        <section className="section5"></section>
        <section className="section6"></section>
        <section className="section7"></section>
        <section className="section8"></section>
      </main>
    </div>
  );
};
