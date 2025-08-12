import clsx from 'clsx';
import { type ReactElement } from 'react';

interface Props {
  opacity?: number;
  size: 'large' | 'small';
}

const exampleText = 'Aa';

export const ContrastSample = ({
  opacity,
  size,
}: Props): ReactElement => {
  return (
    <p
      className={clsx(
        size === 'small' ? 'size-9 text-xxs' : 'h-13 w-13 text-base',
        'flex items-center justify-center rounded-lg border-0.5 text-base',
        `border-polychrom-theme-border-original bg-polychrom-theme-bg text-polychrom-theme-fg`
      )}
    >
      <span
        style={{
          opacity,
        }}
      >
        {exampleText}
      </span>
    </p>
  );
};
