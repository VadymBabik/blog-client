import React, { memo, Fragment } from 'react';
import { Transition } from '@headlessui/react';

import { IconsEnum } from '../../../assets/icons/types';

import { useScrollToBottom } from './hooks/useScrollToBottom';

import { Icon } from '../../Icon';

import { Translate } from '../../Translate';

import { I18nText } from '../../../types';

interface ScrollToBottomProps {
  scrollContainerElement: HTMLElement | null;
  i18nText: I18nText;
}

function ScrollToBottom({
  scrollContainerElement,
  i18nText
}: ScrollToBottomProps) {
  const { scrollToBottom, showScrollToBottom } = useScrollToBottom({
    scrollContainerElement
  });

  return (
    <Transition
      show={showScrollToBottom}
      as={Fragment}
      enter="transition ease-out duration-100 origin-bottom"
      enterFrom="transform opacity-0 scale-50 translate-y-4"
      enterTo="transform opacity-100 scale-100 translate-y-0"
      leave="transition ease-in duration-75 origin-bottom"
      leaveFrom="transform opacity-100 scale-100 translate-y-0"
      leaveTo="transform opacity-0 scale-50 translate-y-4"
    >
      <div className="flex justify-center absolute bottom-4 w-full pointer-events-none">
        <div className="pointer-events-auto">
          <button
            type="button"
            onClick={scrollToBottom}
            className="py-2 pl-2 pr-4 space-x-1 rounded-full inline-flex items-center whitespace-nowrap text-sm font-medium leading-6 focus:ring-base border border-gray-300 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Icon icon={IconsEnum.ARROW_SM_DOWN} />
            <span>
              <Translate id={i18nText} />
            </span>
          </button>
        </div>
      </div>
    </Transition>
  );
}

export default memo<ScrollToBottomProps>(ScrollToBottom);
