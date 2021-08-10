import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import '../shared/same-options.ts';
import {sameOptions} from '../shared/same-options';

const px = (n) => n / 1408 * (window as any).pageWidth;
export const Chart7 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  const data = {
    1: [
      {value: 0.08, name: '杭州市'},
      {value: 0.06, name: '宁波市'},
      {value: 0.11, name: '温州市'},
      {value: 0.09, name: '嘉兴市'},
      {value: 0.12, name: '湖州市'},
      {value: 0.06, name: '绍兴市'},
      {value: 0.08, name: '金华市'},
    ],
    2: [
      {value: 0.12, name: '衢州市'},
      {value: 0.13, name: '舟山市'},
      {value: 0.11, name: '台州市'},
      {value: 0.08, name: '丽水市'},
      {value: 0.12, name: '义乌市'},
      {value: 0.15, name: '龙港市'},
      {value: 0.08, name: '乐清市'},
    ],
    3: [
      {value: 0.16, name: '瑞安市'},
      {value: 0.06, name: '平湖市'},
      {value: 0.08, name: '玉环市'},
      {value: 0.13, name: '东阳市'},
      {value: 0.12, name: '慈溪市'},
      {value: 0.17, name: '江山市'},
      {value: 0.20, name: '龙泉市'},
    ],
  };

  const render = data => {
    myChart.current.setOption({
      ...sameOptions,
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      textStyle: {
        fontSize: px(16),
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        textStyle: {color: 'white'},
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          const value = data.find(i => i.name === name)?.value * 100 + '%';
          return name + ' ' + value;
        }
      },
      series: [
        {
          center: ['60%', '50%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
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
    <div className="案发市统计">
      <h2>案发市统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};