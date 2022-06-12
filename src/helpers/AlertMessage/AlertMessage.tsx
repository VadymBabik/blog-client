import React, { memo, ReactNode } from 'react';
import cl from 'classnames';

import { IconsEnum } from '../../assets/icons/types';

import { Icon } from '../Icon';
import { Translate } from '../Translate';

interface AlertMessageProps {
  addClassName?: string;
  className?: string;
  i18nMessage?: string | null;
  message?: string | ReactNode | null;
}

function AlertMessage({
  addClassName,
  className,
  i18nMessage = null,
  message = null
}: AlertMessageProps) {
  return i18nMessage || message ? (
    <div
      className={
        className ||
        cl('bg-red-50 dark:bg-red-900 p-4 rounded-md', addClassName)
      }
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon
            className="h-5 w-5 text-red-400 dark:text-red-300"
            icon={IconsEnum.X_CIRCLE}
          />
        </div>

        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
            {i18nMessage ? <Translate id={i18nMessage} /> : message}
          </h3>
        </div>
      </div>
    </div>
  ) : null;
}

export default memo(AlertMessage);
