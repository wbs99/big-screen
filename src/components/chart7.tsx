import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import '../shared/same-options.ts';
import {sameOptions} from '../shared/same-options';

const px = (n) => n / 1408 * (window as any).pageWidth;
export const Chart7 = () => {
  const divRef = useRef(null);
  const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  const data = [
    {value: 0.08, name: '东岗路'},
    {value: 0.06, name: '段家滩'},
    {value: 0.11, name: '雁北'},
    {value: 0.09, name: '五泉山'},
    {value: 0.12, name: '中山路'},
    {value: 0.06, name: '庆阳路'},
    {value: 0.08, name: '武都路'},
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
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
  }, []);
  return (
    <div className="案发街道统计">
      <h2>案发街道统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};