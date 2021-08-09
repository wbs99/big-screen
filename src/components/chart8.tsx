import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import '../shared/same-options.ts'

const px = (n) => n / 1408 * (window as any).pageWidth;

export const Chart8 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      color: '#F7A110',
      legend: {
        bottom: px(10),
        textStyle: {color: 'white'},
        itemWidth: px(30),
        itemHeight: px(16)
      },
      grid: {
        x: px(12),
        x2: px(24),
        y: px(16),
        y2: px(10),
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [0, 18, 28, 38, 48, 58, 68, 78],
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
        type: 'line',
        data: [
          0.19, 0.20, 0.26,
          0.35, 0.26, 0.20,
          0.08, 0.06
        ],
        symbol: 'circle',
        symbolSize: px(12),
        lineStyle: {width: px(2)},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#F7A110'
          }, {
            offset: 1,
            color: '#1B1D52'
          }]),
        }
      }]
    });
  }, []);


  return (
    <div className="犯罪年龄趋势">
      <h2>犯罪年龄趋势</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};