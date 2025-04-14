import React from 'react';

export function DevBanner() {
  if (import.meta.env.VITE_API_ENV !== 'development') {
    return null;
  }

  return (
    <div className="bg-red-600 text-white text-center py-2 font-bold">
      DEV MODE
    </div>
  );
}