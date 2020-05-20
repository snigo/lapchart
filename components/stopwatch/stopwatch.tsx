import { FunctionComponent } from 'react';

import { watchifyTime } from '../../utils/watchify';
import css from './stopwatch.module.scss';

interface StopwatchProps {
  time: number;
}

const Stopwatch: FunctionComponent<StopwatchProps> = ({ time }) => {
  return (
    <div className={css.stopwatch}>
      { watchifyTime(time) }
    </div>
  );
};

export default Stopwatch;
