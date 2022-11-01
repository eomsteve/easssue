import { FC, useEffect, useState } from 'react';
import HeatMapCalendar from './HeatMapCalendar';
import { RadarChart } from './RadarChart';
import { DashBoardWordCloudImg } from './WordCloud';

interface DashIndexProps {}

export const DashIndex: FC<DashIndexProps> = () => {
  return (
    <>
      <section className="flex-row w-[100%] h-[95%] border-blue-100 border-2">
        <div className="grid grid-cols-12 h-[50%] border-2 border-black">
          <div className='col-span-3 h-full'>

          <RadarChart />
          </div>
          <div className='col-span-9 py-1 h-[100%]'>
          <DashBoardWordCloudImg />
          </div>
        </div>
        <div className='h-1/2 border-2 border-black'>
        <HeatMapCalendar />
        </div>
      </section>
    </>
  );
};
