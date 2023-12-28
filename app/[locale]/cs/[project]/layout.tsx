import { projects } from '@/lib/constant';
import { ReactNode } from 'react';

export function generateStaticParams() {
  return projects.map((project) => ({ project }));
}

const CSProjectLayout = ({ children }: { children: ReactNode }) => children;

export default CSProjectLayout;
