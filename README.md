# Sales Dashboard Shared - Shared Components

Shared components, utilities and styles for Sales Dashboard projects.

## Structure

- `components/`: Reusable React components
- `utils/`: Utility functions
- `styles/`: Shared CSS/Tailwind styles
- `hooks/`: Custom React hooks
- `constants/`: Shared constants

## Usage

```javascript
// In sales-dashboard-current or sales-dashboard-saas
import { Button } from '../shared/components/Button';
import { formatCurrency } from '../shared/utils/formatters';
import { useLocalStorage } from '../shared/hooks/useLocalStorage';
```

## Installation

```bash
# As local dependency
npm install ../sales-dashboard-shared

# Or as Git submodule
git submodule add https://github.com/lifetripperapp/sales-dashboard-shared
```

## Available Components

- `Button`: Reusable button component
- `Modal`: Generic modal component
- `Table`: Table with pagination
- `Loading`: Loading component
- `ErrorBoundary`: Error handling

## Utilities

- `formatters`: Data formatting functions
- `validators`: Form validation functions
- `helpers`: Helper functions
- `api`: Common API client

## Styles

- `tailwind.css`: Tailwind configuration
- `components.css`: Component styles
- `variables.css`: CSS variables

## Development

```bash
# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## Version Management

This package uses semantic versioning. When making changes:

1. Update version in `package.json`
2. Create git tag: `git tag v1.0.0`
3. Push tag: `git push origin v1.0.0`
4. Update dependencies in consuming projects
