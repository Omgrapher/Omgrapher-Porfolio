export interface ImageType {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface GalleryProps {
  setSelectedImage: (image: ImageType | null) => void;
}

export interface ImageModalProps {
  image: ImageType;
  onClose: () => void;
}

export interface AnimationVariants {
  hidden: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    height?: number | string;
  };
  visible: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    height?: number | string;
    transition?: {
      duration?: number;
      delay?: number;
      staggerChildren?: number;
    };
  };
  exit?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    height?: number | string;
    transition?: {
      duration?: number;
    };
  };
}
