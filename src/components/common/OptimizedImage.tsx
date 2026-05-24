/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { images } from '../../assets/images';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  fallback?: string;
  width?: string | number;
  height?: string | number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  fallback = images.placeholders.service,
  width,
  height,
}) => {
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading Placeholder / Skeleton if not loaded */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-brand-slate/50 animate-pulse" />
      )}

      <img
        src={error ? fallback : src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        // @ts-ignore - fetchPriority is supported in modern browsers
        fetchPriority={fetchPriority}
        onError={handleError}
        onLoad={handleLoad}
        width={width}
        height={height}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default OptimizedImage;
