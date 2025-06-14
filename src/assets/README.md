# Carpeta de Assets

Esta carpeta contiene todos los recursos estáticos del proyecto, organizados en las siguientes subcarpetas:

## Estructura de Carpetas

```
assets/
├── images/          # Imágenes generales
│   ├── backgrounds/ # Imágenes de fondo
│   ├── icons/      # Iconos
│   └── logos/      # Logos
├── fallback.png    # Imagen por defecto para errores de carga
└── README.md      # Este archivo
```

## Convenciones de Nombrado

- Usar nombres descriptivos en minúsculas
- Separar palabras con guiones medios (ejemplo: `mi-imagen.png`)
- Incluir dimensiones en el nombre cuando sea relevante (ejemplo: `logo-200x200.png`)
- Usar formatos optimizados (preferentemente .webp para fotos, .svg para iconos)

## Uso

Para usar las imágenes en el proyecto, importar desde el componente Image:

```tsx
import { Image } from '../components/common/Image';

// Ejemplo de uso
<Image 
  src="/src/assets/images/logo.png"
  alt="Logo de la empresa"
  width={200}
  height={200}
/>
``` 