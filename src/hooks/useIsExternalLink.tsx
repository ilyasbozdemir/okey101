'use client';

import { useMemo } from 'react';

const useIsExternalLink = (url: string) => {
  return useMemo(() => {
    if (!url) return false;
    return url.startsWith('http://') || url.startsWith('https://');
  }, [url]);
};

export default useIsExternalLink;
