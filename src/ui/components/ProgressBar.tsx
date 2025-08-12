import { useStore } from '@nanostores/react';
import { RewardingAnimationBodyText } from '~ui/components/RewardingAnimationBodyText.tsx';
import { RewardingAnimationContentText } from '~ui/components/RewardingAnimationContentText.tsx';
import { RewardingAnimationFluentText } from '~ui/components/RewardingAnimationFluentText.tsx';
import { conclusions } from '~ui/services/apca/conclusion.ts';
import { $rewardAnimationLaunch } from '~ui/stores/selected-nodes.ts';
import { isEmpty } from '~utils/not-empty.ts';
import clsx from 'clsx';
import { type ReactElement } from 'react';

interface Props {
  apca: number;
  height: number;
}

const SCALE = 2;
const APCA_NEGATIVE_MAX_SCALE = 108;
const APCA_POSITIVE_MAX_SCALE = 106;
const SERIF_OFFSET = 2;

export const ProgressBar = ({ apca, height }: Props): ReactElement => {
  const rewardAnimationLaunch = useStore($rewardAnimationLaunch);
  const maxScale = apca > 0 ? APCA_POSITIVE_MAX_SCALE : APCA_NEGATIVE_MAX_SCALE;
  const barWidth = maxScale * SCALE;
  const filledSegmentWidth = Math.abs(apca) * SCALE;
  const [, ...conclusionScores] = Object.values(conclusions).reverse();

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center">
        <span className="mr-2 text-xxs text-polychrom-theme-secondary">0</span>

        <div
          style={{
            height: `${height}px`,
            width: barWidth,
          }}
          className="relative rounded-full bg-polychrom-theme-secondary-12"
        >
          <div
            style={{
              height: `${height}px`,
              width: filledSegmentWidth,
            }}
            className="rounded-full bg-gradient-to-r from-polychrom-theme-fg-70 from-70% to-polychrom-theme-fg to-85%"
          />

          <div>
            {Array.from({ length: conclusionScores.length }).map((_, i) => {
              const value = conclusionScores[i];
              const isContextText = value === conclusions['Content Text'];
              const isBodyText = value === conclusions['Body Text'];
              const isFluentText = value === conclusions['Fluent Text'];

              if (isEmpty(value)) return null;

              const position = value * SCALE - SERIF_OFFSET;

              return (
                <div
                  className={clsx(
                    'absolute top-1/2 w-px -translate-y-1/2 bg-polychrom-theme-bg',
                    isContextText ? 'h-1' : 'h-0.5'
                  )}
                  style={{
                    left: position,
                  }}
                  key={i}
                >
                  {isContextText &&
                    rewardAnimationLaunch.contentText === true && (
                      <RewardingAnimationContentText />
                    )}

                  {isBodyText && rewardAnimationLaunch.bodyText === true && (
                    <RewardingAnimationBodyText />
                  )}

                  {isFluentText &&
                    rewardAnimationLaunch.fluentText === true && (
                      <RewardingAnimationFluentText />
                    )}
                </div>
              );
            })}
          </div>
        </div>

        <span
          className="ml-2 text-xxs text-polychrom-theme-secondary"
        >
          {maxScale}
        </span>
      </div>
    </div>
  );
};
