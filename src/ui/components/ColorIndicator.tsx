import { useStore } from '@nanostores/react';
import { ColorPreview } from '~ui/components/ColorPreview.tsx';
import {
  getFormatterForCSS,
  getFormatterForDisplaying,
} from '~utils/colors/formatters.ts';
import clsx from 'clsx';
import { type Oklch } from 'culori/fn';
import { type ReactElement } from 'react';
import useClipboard from 'react-use-clipboard';

import { $colorSpaceDisplayMode } from '../stores/color-space-display-mode.ts';
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip.tsx';

interface ColorIndicatorProps {
  fill: { hex: string; oklch: Oklch };
  indicatorType: 'background' | 'foreground';
  isBlended: boolean;
}

export const ColorIndicator = ({
  fill,
  indicatorType,
  isBlended,
}: ColorIndicatorProps): ReactElement => {
  const colorSpaceDisplayMode = useStore($colorSpaceDisplayMode);

  const formatColorForDisplay = getFormatterForDisplaying(
    colorSpaceDisplayMode
  );
  const displayValue = formatColorForDisplay(fill.oklch);

  const formatColorForCSS = getFormatterForCSS(colorSpaceDisplayMode);
  const cssValue = formatColorForCSS(fill.oklch);

  const [isCopied, setCopied] = useClipboard(cssValue, {
    successDuration: 2000,
  });

  return (
    <Tooltip>
      <TooltipTrigger>
        <button
          className={clsx(
            'interactive',
            indicatorType === 'foreground' && 'text-polychrom-theme-fg',
            indicatorType === 'background' && 'text-polychrom-theme-secondary'
          )}
          onClick={setCopied}
          type="button"
        >
          <div className="flex items-center rounded-[7px] p-1 hover:bg-indicatorsHover active:bg-indicatorsActive">
            <div className="mr-2">
              <ColorPreview
                indicatorType={indicatorType}
                isBlended={isBlended}
              />
            </div>
            <span
              className={clsx(
                indicatorType === 'foreground' && 'text-polychrom-theme-fg',
                indicatorType === 'background' && 'text-polychrom-theme-secondary'
              )}
            >
              {displayValue}
            </span>
          </div>
        </button>
      </TooltipTrigger>
      <TooltipContent>{isCopied ? 'Copied!' : 'Copy as CSS'}</TooltipContent>
    </Tooltip>
  );
};
