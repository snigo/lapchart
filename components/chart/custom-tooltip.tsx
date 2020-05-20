import { FunctionComponent } from 'react';
import { watchifyTime } from '../../utils/watchify';

import css from './custom-tooltip.module.scss';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any;
  label?: string;
}

const CustomTooltip: FunctionComponent<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className={css['custom-tooltip']}>
        <span>{`${label} : `}</span>
        <span>{watchifyTime(+payload[0].value * 10)}</span>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
