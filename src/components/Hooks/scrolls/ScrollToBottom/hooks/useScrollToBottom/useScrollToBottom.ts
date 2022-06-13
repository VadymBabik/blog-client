import { useCallback, useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

interface ScrollToBottomOptions {
  scrollContainerElement: HTMLElement | null;
}

const showUnder = 400;

function useScrollToBottom({ scrollContainerElement }: ScrollToBottomOptions) {
  const scrollToBottom = useCallback(() => {
    scrollContainerElement?.scrollTo({
      top: scrollContainerElement?.scrollHeight,
      behavior: 'smooth'
    });
  }, [scrollContainerElement]);

  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  const checkScroll = useCallback(() => {
    if (!scrollContainerElement && showScrollToBottom) {
      setShowScrollToBottom(false);
      return;
    }
    if (!scrollContainerElement) {
      return;
    }

    const scrolledPx =
      scrollContainerElement.scrollHeight -
      scrollContainerElement.scrollTop -
      scrollContainerElement.offsetHeight;

    if (scrolledPx > showUnder && !showScrollToBottom) {
      setShowScrollToBottom(true);
      return;
    }
    if (scrolledPx <= showUnder && showScrollToBottom) {
      setShowScrollToBottom(false);
      return;
    }
  }, [scrollContainerElement, showScrollToBottom]);

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

  return { scrollToBottom, showScrollToBottom };
}

export default useScrollToBottom;
