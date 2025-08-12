import { BasicColorPreviewIcon } from '~ui/components/BasicColorPreviewIcon.tsx';
import { LayeredColorPreviewIcon } from '~ui/components/LayeredColorPreviewIcon.tsx';
import { type ReactElement } from 'react';

interface Props {
  indicatorType: 'background' | 'foreground';
  isBlended: boolean;
}

export const ColorPreview = ({
  indicatorType,
  isBlended,
}: Props): ReactElement => {
  if (isBlended) {
    return (
      <div className="flex">
        <LayeredColorPreviewIcon indicatorType={indicatorType} />
      </div>
    );
  }

  return <BasicColorPreviewIcon indicatorType={indicatorType} />;
};
