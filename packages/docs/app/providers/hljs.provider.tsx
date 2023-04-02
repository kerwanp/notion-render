'use client';

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { ReactNode, useEffect } from 'react';

export const HljsProvider = ({ children }: { children?: ReactNode }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return <>{children}</>;
};
