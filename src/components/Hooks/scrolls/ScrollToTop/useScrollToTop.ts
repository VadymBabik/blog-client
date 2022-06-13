import { useCallback, useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

interface ScrollToTopOptions {
  scrollContainerElement: HTMLElement | null;
}

const showUnder = 160;

function useScrollToTop({ scrollContainerElement }: ScrollToTopOptions) {
  const scrollToTop = useCallback(() => {
    scrollContainerElement?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [scrollContainerElement]);

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const checkScroll = useCallback(() => {
    if (!scrollContainerElement && showScrollToTop) {
      setShowScrollToTop(false);
      return;
    }
    if (!scrollContainerElement) {
      return;
    }
    if (scrollContainerElement.scrollTop >= showUnder && !showScrollToTop) {
      setShowScrollToTop(true);
      return;
    }
    if (scrollContainerElement.scrollTop < showUnder && showScrollToTop) {
      setShowScrollToTop(false);
      return;
    }
  }, [scrollContainerElement, showScrollToTop]);

  useEffect(() => {
    checkScroll();

    if (!scrollContainerElement) {
      return;
    }

    const handleScroll = throttle(checkScroll, 100);

    scrollContainerElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainerElement.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [scrollContainerElement, checkScroll]);

  return { scrollToTop, showScrollToTop };
}

export default useScrollToTop;
