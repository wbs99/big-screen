import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import '../shared/same-options.ts';
import {sameOptions} from '../shared/same-options';
import china from '../geo/china.json';

const px = (n) => n / 1408 * (window as any).pageWidth;
export const Chart5 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    echarts.registerMap('CN', china);
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      ...sameOptions,
      color: ['#97cbce', '#3559a7', '#f6b044', '#ea5c5a', '#3ab059', '#fdfdfd'],
      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          mapType: 'CN',
          data: [
            {name: '浙江省', value: 1},
          ],
          label: {show: false, color: 'white'},
          itemStyle: {
            areaColor: 'rgba(56, 105, 112, 0.5)',
            borderColor: '#376c78',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#3597d4',
            },
          }
        },
      ]
    });
  }, []);
  return (
    <div className='map'>
      <div ref={divRef} className="chart"></div>
      <p>该地图只显示中国部分地区</p>
    </div>

  );
};