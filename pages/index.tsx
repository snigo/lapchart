import { useState, useRef } from 'react';
import Head from 'next/head';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import PulsingHeart from '../components/animation/pulsing-heart';
import Topbar from '../components/topbar/topbar';
import Stopwatch from '../components/stopwatch/stopwatch';
import { watchifyTime } from '../utils/watchify';
import CustomTooltip from '../components/chart/custom-tooltip';

function mapToChartData(arr: number[]) {
  console.log(arr);
  return [...arr].reverse().map((result, i) => ({
    name: `Lap ${(i + 1).toString().padStart(2, '0')}`,
    uv: Math.floor(result / 10),
  }));
}

const Index = () => {
  const [time, _setTime] = useState(0);
  const [interval, _setInterval] = useState(null);
  const [running, _setRunning] = useState(false);
  const [_acc, _setAcc] = useState(0);
  const [laps, _setLaps] = useState([]);
  const [bestLap, _setBestLap] = useState(-1);
  const [worstLap, _setWorstLap] = useState(-1);

  const resetBtnEl = useRef(null);
  const startBtnEl = useRef(null);

  const start = () => {
    const now = Date.now() - time;
    _setRunning(true);
    _setInterval(setInterval(() => {
      _setTime(Date.now() - now);
    }, 10));
    resetBtnEl.current.focus();
  };

  const stop = () => {
    clearInterval(interval);
    _setRunning(false);
    lap();
    resetBtnEl.current.focus();
  };

  const reset = () => {
    _setTime(0);
    _setLaps([]);
    _setAcc(0);
    startBtnEl.current.focus();
  };

  const lap = () => {
    const elapsed = time - _acc;
    _setAcc(time);
    _setLaps([elapsed, ...laps]);
    const bestTime = Math.min(elapsed, ...laps);
    const worstTime = Math.max(elapsed, ...laps);
    _setBestLap([elapsed, ...laps].indexOf(bestTime));
    _setWorstLap([elapsed, ...laps].indexOf(worstTime));
  };


  return (
    <div className="shell">
      <Head>
        <title>Lapchart: smart stopwatch</title>
        <meta name="description" content="Smart stopwatch app that keeps track of your laps and visualises your progress."/>
        <meta name="keywords" content="smartwatch, stopwatch, timer, stopwatch app" />
      </Head>
      <Topbar fixed={true} />
      <div className="wrapper">
        <div className="stopwatch-container">
          <Stopwatch time={time} />
        </div>
        <div className="stopwatch-controls">
          <button type="button" onClick={running ? lap : reset} data-action={running ? 'lap' : 'reset'} ref={resetBtnEl}>
            {running ? 'Lap' : 'Reset'}
          </button>
          <button type="button" onClick={running ? stop : start} data-action={running ? 'stop' : 'start'} ref={startBtnEl}>
            {running ? 'Stop' : 'Start'}
          </button>
        </div>
        <div className={`stopwatch-chart stopwatch-chart-${(!running && time !== 0) ? 'open' : 'idle'}`}>
          {
            (!running && time !== 0) && (
              <LineChart
                width={360}
                height={240}
                data={mapToChartData(laps)}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            )
          }
        </div>
        <div className="stopwatch-laps">
          {
            running && (
              <div className="stopwatch-laps-row">
                <div>{`Lap ${(laps.length + 1).toString().padStart(2, '0')}`}</div>
                <div className="stopwatch-laps-row-filler" />
                <div>{watchifyTime(time - _acc)}</div>
              </div>
            )
          }
          {
            laps.map((lapTime, index, { length }) => (
              <div
                className={`stopwatch-laps-row ${bestLap === index ? 'lap-best' : ''} ${(worstLap === index && index > 0) ? 'lap-worst' : ''}`}
                key={`lap-${length - index}`}
              >
                <div>{`Lap ${(length - index).toString().padStart(2, '0')}`}</div>
                <div className="stopwatch-laps-row-filler" />
                <div>{watchifyTime(lapTime)}</div>
              </div>
            ))
          }
        </div>
      </div>
      <footer>
        <span>{'Designed and coded with '}</span>
        <PulsingHeart />
        <span>{' by '}</span>
        <a className="fancy-link" href="mailto:snigo.ogins@gmail.com">snigo</a>
        <span>.</span>
      </footer>
    </div>
  );
};

export default Index;
