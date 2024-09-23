import { useState, useEffect } from 'react';

const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setIntersecting(true);
        }
      },
      {
        rootMargin
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

export default useOnScreen;
