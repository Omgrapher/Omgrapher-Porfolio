/**
 * Tipos de imágenes soportados
 */
export type ImageType = "jpg" | "jpeg" | "png" | "webp" | "gif" | "svg";

/**
 * Interfaz para la configuración de una imagen
 */
export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Función para validar si una URL es una imagen válida
 * @param url URL de la imagen a validar
 * @returns boolean
 */
export const isValidImageUrl = (url: string): boolean => {
  const imageExtensions: ImageType[] = [
    "jpg",
    "jpeg",
    "png",
    "webp",
    "gif",
    "svg",
  ];
  return imageExtensions.some((ext) => url.toLowerCase().endsWith(`.${ext}`));
};

/**
 * Función para obtener la extensión de una imagen
 * @param url URL de la imagen
 * @returns string | null
 */
export const getImageExtension = (url: string): string | null => {
  const match = url.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i);
  return match ? match[1].toLowerCase() : null;
};

/**
 * Función para generar un objeto de imagen con configuración por defecto
 * @param config Configuración de la imagen
 * @returns ImageConfig
 */
export const createImageConfig = (
  config: Partial<ImageConfig>
): ImageConfig => {
  return {
    src: config.src || "",
    alt: config.alt || "Imagen descriptiva",
    width: config.width,
    height: config.height,
    className: config.className || "",
  };
};

/**
 * Función para cargar una imagen local desde la carpeta public/images
 * @param path Ruta relativa de la imagen desde la carpeta images
 * @returns string
 */
export const getLocalImagePath = (path: string): string => {
  return `/images/${path}`;
};
