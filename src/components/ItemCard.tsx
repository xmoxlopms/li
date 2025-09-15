import React from 'react';

type ItemCardProps = {
  color: string;
  children: React.ReactNode;
  className?: string;
};

const ItemCard = ({ color, children, className = '' }: ItemCardProps) => {
  return (
    <div 
      className={`relative rounded-lg overflow-hidden h-[220px] w-full ${className}`}
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm cursor-pointer transition-transform hover:scale-110">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};

export default ItemCard;