/* eslint-disable react/display-name */
import React, { useEffect } from 'react';

interface ScrollObserverComponentProps {
  observerClass: string;
  animationClass: string;
}

function withScrollObserver<T>(
  ScrollObserverComponent: React.ComponentType<any>
) {
  return (props: ScrollObserverComponentProps & T) => {
    const { observerClass, animationClass } = props;
    useEffect(() => {
      const $observeSection = document.querySelector(`#${observerClass}`);
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
      if ($observeSection) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              $observeSection?.classList?.add(animationClass);
            } else if (!entry.isIntersecting) {
              $observeSection?.classList?.remove(animationClass);
            }
          });
        }, options);

        observer.observe($observeSection);
      }
    }, []);

    return <ScrollObserverComponent {...props} />;
  };
}

export default withScrollObserver;
