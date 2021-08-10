import React, {useEffect, useState} from 'react';
import {consoleLog} from 'echarts/types/src/util/log';

export const Chart4 = () => {
  const [num1, setNum1] = useState('101203');
  const [num2, setNum2] = useState('123321');
  const [num3, setNum3] = useState('303875');

  useEffect(() => {
    setInterval(() => {
      setNum1(n => {
        const arr1 = n.split('');
        arr1.splice(2, 1);
        const arr2 = Math.floor(parseInt(arr1.join('')) + 1).toString().split('');
        arr2.splice(2, 0, ',');
        return arr2.join('');
      });
    }, 20);
    setInterval(() => {
      setNum2(n => {
        const arr1 = n.split('');
        arr1.splice(3, 1);
        const arr2 = Math.floor(parseInt(arr1.join('')) + 1).toString().split('');
        arr2.splice(3, 0, ',');
        return arr2.join('');
      });
    }, 20);
    setInterval(() => {
      setNum3(n => {
        const arr1 = n.split('');
        arr1.splice(3, 1);
        const arr2 = Math.floor(parseInt(arr1.join('')) + 1).toString().split('');
        arr2.splice(3, 0, ',');
        return arr2.join('');
      });
    }, 20);
  }, []);
  return (
    <div className="title">
      <h1>公安部大数据研判分析平台</h1>
      <div className="divWrapper">
        <div>
          <span>
            {num1}
          </span>
          提前预警
        </div>
        <div>
          <span>
            {num2}
          </span>
          本月成功处置案件
        </div>
        <div>
          <span>
            {num3}
          </span>
          本月已发生案件
        </div>
      </div>
    </div>
  );
};





