import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={`py-32 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};
