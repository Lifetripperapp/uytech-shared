# UYTECH Shared - Componentes Compartidos

## Descripción

Componentes, utilidades y estilos compartidos entre UYTECH Current y UYTECH SaaS.

## Estructura

- `components/`: Componentes React reutilizables
- `utils/`: Funciones utilitarias
- `styles/`: Estilos CSS/Tailwind compartidos
- `hooks/`: Custom React hooks
- `constants/`: Constantes compartidas

## Uso

```javascript
// En uytech-current o uytech-saas
import { Button } from '../shared/components/Button';
import { formatCurrency } from '../shared/utils/formatters';
import { useLocalStorage } from '../shared/hooks/useLocalStorage';
```

## Instalación

```bash
# Como dependencia local
npm install ../uytech-shared

# O como submodule de Git
git submodule add https://github.com/uytech/uytech-shared
```

## Componentes Disponibles

- `Button`: Botón reutilizable
- `Modal`: Modal genérico
- `Table`: Tabla con paginación
- `Loading`: Componente de carga
- `ErrorBoundary`: Manejo de errores

## Utilidades

- `formatters`: Formateo de datos
- `validators`: Validación de formularios
- `helpers`: Funciones auxiliares
- `api`: Cliente API común

## Estilos

- `tailwind.css`: Configuración de Tailwind
- `components.css`: Estilos de componentes
- `variables.css`: Variables CSS
