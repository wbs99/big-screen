import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import '../shared/same-options.ts'

const px = (n) => n / 1408 * (window as any).pageWidth;

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(20),
        x2: px(20),
        y: px(20),
        y2: px(70),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
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
      series: [
        {
          name: '抢劫',
          type: 'line',
          data: [0.09, 0.07, 0.05, 0.06, 0.05, 0.04, 0.04,0.02,0.03]
        },
        {
          name: '醉驾',
          type: 'line',
          data: [0.08, 0.05, 0.06, 0.08, 0.08, 0.05, 0.06,0.03,0.01]
        },
        {
          name: '盗窃',
          type: 'line',
          data: [0.10, 0.08, 0.06, 0.07, 0.05, 0.03, 0.04, 0.03, 0.02]
        },
        {
          name: '故意杀人',
          type: 'line',
          data: [0.11, 0.08, 0.09, 0.07, 0.06, 0.04, 0.03, 0.02, 0.01]
        },
        {
          name: '故意伤人',
          type: 'line',
          data: [0.12, 0.10, 0.09, 0.08, 0.10, 0.08, 0.06, 0.03, 0.02]
        }
      ].map(obj => ({
        ...obj,
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)}
      }))
    });
  }, []);


  return (
    <div className="发案趋势分析">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};