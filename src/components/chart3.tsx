import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import '../shared/same-options.ts';
import {sameOptions} from '../shared/same-options';

const px = (n) => n / 1408 * (window as any).pageWidth;
export const Chart3 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = {
    1: [
      0.15, 0.13, 0.11,
      0.13, 0.14, 0.15,
      0.16, 0.18, 0.08,
      0.19, 0.17, 0.16,
      0.15
    ],
    2: [
      0.14, 0.16, 0.18,
      0.13, 0.12, 0.15,
      0.16, 0.18, 0.13,
      0.21, 0.18, 0.16,
      0.15
    ],
    3: [
      0.11, 0.10, 0.11,
      0.08, 0.08, 0.08,
      0.16, 0.18, 0.16,
      0.19, 0.17, 0.16,
      0.15
    ],
  };

  const render = data => {
    myChart.current.setOption({
      ...sameOptions,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
          formatter(val) {
            return val * 100 + '%';
          }
        }
      },
      series: [{
        name: '故意伤人',
        type: 'line',
        data: data,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#414a9f'
          }, {
            offset: 1,
            color: '#1b1d52'
          }]),
        }
      }]
    });
  };

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    render(data[1]);
    setInterval(() => {
      render(data[Math.ceil(Math.random() * 3)]); // render(data[1,2,3])
    }, 1000);
  }, []);

  return (
    <div className="案发时段分析">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};