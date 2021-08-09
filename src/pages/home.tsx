import React, {useEffect, useRef} from 'react';
import './home.scss';
import {Chart1} from '../components/chart1';
import {Chart2} from '../components/chart2';
import {Chart3} from '../components/chart3';
import {Chart5} from '../components/chart5';
import {Chart6} from '../components/chart6';
import {Chart7} from '../components/chart7';
import {Chart8} from '../components/chart8';

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
        <section className="section3">
          <Chart3/>
        </section>
        <section className="section4"></section>
        <section className="section5">
          <Chart5/>
        </section>
        <section className="section6">
          <Chart6/>
        </section>
        <section className="section7">
          <Chart7/>
        </section>
        <section className="section8">
          <Chart8/>
        </section>
      </main>
    </div>
  );
};
