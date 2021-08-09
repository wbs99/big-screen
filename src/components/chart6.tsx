import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import '../shared/same-options.ts';
import {sameOptions} from '../shared/same-options';

const px = (n) => n / 1408 * (window as any).pageWidth;
export const Chart6 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      ...sameOptions,
      color: ['#3597d4', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
      textStyle: {
        fontSize: px(16),
      },
      legend: {
        left: px(2),
        top: px(52),
        orient: 'vertical',
        textStyle: {color: 'white'},
        itemWidth: px(6),
        itemHeight: px(6),
        itemGap: px(14),
      },
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['60%', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
            formatter(options) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: {show: false},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            {value: 0.07, name: '10-20'},
            {value: 0.10, name: '20-30'},
            {value: 0.23, name: '30-40'},
            {value: 0.28, name: '40-50'},
            {value: 0.32, name: '50-60'},
          ]
        }
      ]
    });
  }, []);
  return (
    <div className="犯罪人员年龄分布">
      <h2>犯罪人员年龄分布</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};