"use client";

import { useEffect, useState } from 'react';

export default function Filters({ onFilterChange }) {
  const [resourceTypes, setResourceTypes] = useState([]);

  useEffect(() => {
    const fetchTerms = async () => {
      const res = await fetch('https://your-wp-site.com/wp-json/wp/v2/resource_type');
      const data = await res.json();
      setResourceTypes(data);
    };
    fetchTerms();
  }, []);

  const handleChange = (taxonomy, id, checked) => {
    onFilterChange(prev => {
      const updated = { ...prev };
      if (!updated[taxonomy]) updated[taxonomy] = [];
      if (checked) {
        updated[taxonomy].push(id);
      } else {
        updated[taxonomy] = updated[taxonomy].filter(i => i !== id);
        if (updated[taxonomy].length === 0) delete updated[taxonomy];
      }
      return updated;
    });
  };

  return (
    <div>
      <h3 className="font-bold mb-2">Resource Type</h3>
      {resourceTypes.map(term => (
        <label key={term.id} className="block mb-1">
          <input
            type="checkbox"
            onChange={(e) => handleChange('resource_type', term.id, e.target.checked)}
          />
          <span className="ml-2">{term.name}</span>
        </label>
      ))}
    </div>
  );
}

