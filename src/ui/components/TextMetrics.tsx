import { conclusions } from '~ui/services/apca/conclusion.ts';
import { fontLookupAPCA } from 'apca-w3';
import { type ReactElement } from 'react';

import { PictureIcon } from './PictureIcon.tsx';
import { StopIcon } from './StopIcon.tsx';
import { WarningIcon } from './WarningIcon.tsx';

interface Props {
  apca: number;
}

export const TextMetrics = ({ apca }: Props): ReactElement => {
  const [, , , , regular, , , bold] = fontLookupAPCA(apca);

  if (Math.abs(apca) < conclusions['Not Readable']) {
    return <StopIcon />;
  }

  if (Math.abs(apca) < conclusions['Non-Text']) {
    return <WarningIcon />;
  }

  if (Math.abs(apca) < conclusions['Large Text']) {
    return <PictureIcon />;
  }

  return (
    <div className="flex items-center text-polychrom-theme-fg">
      <div className="mr-3 flex items-center">
        <p className="mr-2 rounded border-0.5 border-polychrom-theme-fg p-1 text-xxxs font-medium leading-[8px]">
          Rg
        </p>
        <p className="text-xxs leading-none">{regular}px</p>
      </div>
      <div className="flex items-center">
        <p className="mr-2 rounded border-0.5 border-polychrom-theme-fg p-1 text-xxxs font-medium leading-[8px]">
          Bd
        </p>
        <p className="text-xxs leading-none">{bold}px</p>
      </div>
    </div>
  );
};
