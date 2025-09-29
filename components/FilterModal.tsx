'use client';

import { useState } from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterModal({ isOpen, onClose, selectedFilter, onFilterChange }: FilterModalProps) {
  const filterOptions = ['All', 'AI', 'Web', 'Mobile', 'VR'];

  if (!isOpen) return null;

  return (
    <div className="filter-modal-overlay">
      <div className="filter-modal-card">
        <div className="filter-modal-header">
          <button
            onClick={onClose}
            className="filter-modal-close"
            aria-label="Close filters"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="filter-modal-spacer" />
        <div className="space-y-3">
          <div className="filter-modal-grid">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => onFilterChange(option)}
                className={`filter-modal-option ${
                  selectedFilter === option ? 'active' : 'inactive'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
