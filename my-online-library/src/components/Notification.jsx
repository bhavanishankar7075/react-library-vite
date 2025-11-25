import React, { useEffect } from 'react'
import '../styles/Notification.css'

export default function Notification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 2200)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="notify success">
      {message}
    </div>
  )
}
