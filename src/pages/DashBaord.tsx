import * as React from 'react';
import { ProgressChart } from '../component/ProgressChart';
import { Cards } from '../component/Cards';
import { TableComponent } from '../component/TableComponent';




export default function DashBoard () {
  return (
    <div className='dasboard-container'>
     <div className='progress-chart-area'>
     <ProgressChart/>
     </div>
     <div className='cards-area'>
      <Cards/>
     </div>
     <div className='table-area'>
      <TableComponent/>
     </div>
    </div>
  );
}
