import React from 'react'

interface EmptyStateProps {
  label: string
  className?: string
}

export default function EmptyState({ label, className }: EmptyStateProps) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center text-beige-light ${className}`}
    >
      <p>{label}</p>
    </div>
  )
}
