# manual-usuario-reack

Aplicación web construida con React y Vite para la gestión de usuarios y creación de diagramas de flujo.

## Tecnologías

- **React 19** con React Router para la navegación
- **Flowbite React** para los componentes de UI
- **Tailwind CSS 4** para los estilos
- **@xyflow/react** para el editor de diagramas
- **JSON Server** como API REST para desarrollo

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3000
```

## Scripts

```bash
npm run dev        # Inicia el servidor de desarrollo
npm run build      # Genera el build de producción
npm run preview    # Previsualiza el build
npm run lint       # Ejecuta el linter
```

## Estructura del proyecto

src/
├── components/         # Componentes reutilizables
│   ├── Toast.jsx
│   └── ToastProgress.jsx
├── hooks/              # Hooks personalizados
│   └── useToast.js
├── layouts/            # Layouts de la aplicación
│   ├── MainLayout.jsx
│   └── Sidebar.jsx
├── pages/
│   ├── diagrams/       # Módulo de diagramas
│   │   ├── nodes/      # Tipos de nodos disponibles
│   │   ├── Diagram.jsx
│   │   ├── DiagramCanvas.jsx
│   │   ├── DiagramList.jsx
│   │   └── DiagramModal.jsx
│   └── usuario/        # Módulo de usuarios
│       ├── UserModal.jsx
│       └── Users.jsx
└── services/           # Llamadas a la API
├── diagramService.js
└── userService.js

## Funcionalidades

### Usuarios

- Listar, crear, editar y eliminar usuarios

### Diagramas

- Crear y eliminar diagramas
- Editor visual con nodos arrastrables y conexiones
- Tipos de nodos: Proceso, Terminal y Decisión
- Guardado del diagrama con nodos y conexiones

