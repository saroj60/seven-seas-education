import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-8 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
      <Link to="/" className="hover:text-brand-orange transition-colors flex items-center gap-1">
        <Home size={16} />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight size={14} className="text-slate-300 shrink-0" />
          {idx === items.length - 1 ? (
            <span className="text-slate-900 font-bold">{item.name}</span>
          ) : (
            <Link to={item.path} className="hover:text-brand-orange transition-colors">
              {item.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
