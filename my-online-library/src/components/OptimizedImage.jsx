// src/components/OptimizedImage.jsx
import React from 'react'

export default function OptimizedImage({ src, alt, className, sizes='(max-width:600px) 100vw, 400px' }) {
  // If you have multiple sizes available, adapt srcSet. For now use same src for simplicity.
  // If you add multiple image files, replace with proper srcset entries.
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      sizes={sizes}
      className={className}
      style={{ display:'block', width:'100%', height:'100%', objectFit:'cover' }}
    />
  )
}
