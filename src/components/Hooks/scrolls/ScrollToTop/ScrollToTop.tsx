import React from 'react';
import cl from 'classnames';

import { IconsEnum } from '../../../assets/icons/types';

import { PureIconButtonHelper } from '../../buttons/PureIconButtonHelper';

import useScrollToTop from './useScrollToTop';

interface ScrollToTopProps {
  scrollContainerElement: HTMLElement | null;
  className?: string;
}

function ScrollToTop({ scrollContainerElement }: ScrollToTopProps) {
  const { scrollToTop, showScrollToTop } = useScrollToTop({
    scrollContainerElement
  });

  return (
    <div className="sticky bottom-0 w-full h-px z-10">
      <PureIconButtonHelper
        className={cl(
          'absolute right-3 bottom-20 p-2 sm:right-10 sm:bottom-20 sm:p-3 rounded-full transition-opacity focus:ring-offset-0 text-gray-700 text-opacity-70 hover:text-opacity-100 hover:bg-gray-300 hover:bg-opacity-50 dark:text-gray-300 dark:text-opacity-70 dark:hover:text-opacity-100 dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:hover:bg-opacity-50',
          showScrollToTop ? 'visible opacity-100' : 'invisible opacity-0'
        )}
        onClick={scrollToTop}
        icon={IconsEnum.ARROW_NARROW_UP_OUTLINE}
        iconClassName="h-6 w-6 sm:h-8 sm:w-8"
      />
    </div>
  );
}

export default ScrollToTop;
