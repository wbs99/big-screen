import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import '../shared/same-options.ts';
import {px, sameOptions} from '../shared/same-options';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = {
    1: [120, 180, 150, 130, 80, 60, 130, '湖北', '浙江', '福建', '北京', '上海', '重庆', '河北'],
    2: [170, 130, 60, 80, 170, 100, 60, '湖南', '广东', '山东', '陕西', '内蒙古', '广西', '江苏'],
    3: [140, 60, 170, 180, 160, 88, 140, '黑龙江', '辽宁', '江西', '新疆', '河南', '吉林', '宁夏']
  };
  const render = data => {
    myChart.current.setOption({
      ...sameOptions,
      xAxis: {
        axisTick: {show: false}, //坐标轴刻度
        type: 'category',
        data: data.slice(7, -1),
        axisLabel: {
          fontSize: px(15),
          formatter(val) {// X 轴文字换行
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        }
      },
      yAxis: {
        axisLine: {show: true}, //是否显示 y 轴
        splitLine: {show: false},
        type: 'value'
      },
      series: [{
        data: data.slice(0, 6),
        type: 'bar'
      }]
    });
  };

  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    render(data[1]);
    setInterval(() => {
      render(data[Math.ceil(Math.random() * 3)]); // render(data[1,2,3])
    }, 1500);
  }, []);

  return (
    <div className="案发派出所管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};