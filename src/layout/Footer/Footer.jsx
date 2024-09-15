import React from 'react';

export default function Footer({ className, id: ref }) {
  return (
    <footer className={className} ref={ref}>
      <div className="content">
        Ecommerce created during Wizeline's Academy React Bootcamp
      </div>
    </footer>
  );
}
