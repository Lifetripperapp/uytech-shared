// Shared Components
export { default as MultiSelect } from './components/MultiSelect.jsx';
export { default as SideMenu } from './components/SideMenu.jsx';

// Shared Utilities
export * from './utils/apiConfig.js';
export * from './utils/fetch-wrapper.js';
export * from './utils/formatters.js';

// Shared Hooks
export { default as useFetchSalespersons } from './hooks/useFetchSalespersons.js';

// Re-export React for convenience
export { default as React } from 'react'; 