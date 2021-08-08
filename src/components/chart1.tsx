import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const px = (n) => n / 1408 * (window as any).pageWidth;
export const Chart1 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      xAxis: {
        axisTick: {show: false}, //坐标轴刻度
        type: 'category',
        data: ['浙江省', '浙江省', '浙江省', '浙江省', '浙江省', '浙江省', '浙江省'],
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
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
    });
  }, []);
  return (
    <div className="案发派出所管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};