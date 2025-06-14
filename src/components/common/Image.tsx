import React from "react";
import type { ImageConfig } from "../../helpers/imageHelpers";
import { createImageConfig } from "../../helpers/imageHelpers";

interface ImageProps extends Partial<ImageConfig> {
  fallbackSrc?: string;
  onError?: () => void;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = "/src/assets/fallback.png",
  onError,
  style,
  loading = "lazy",
  ...props
}) => {
  const [imgSrc, setImgSrc] = React.useState<string>(src || "");
  const [hasError, setHasError] = React.useState<boolean>(false);

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
    onError?.();
  };

  const imageConfig = createImageConfig({
    src: imgSrc,
    alt: alt || "Imagen descriptiva",
    width,
    height,
    className,
  });

  return (
    <img
      {...imageConfig}
      {...props}
      loading={loading}
      style={{
        maxWidth: "100%",
        height: "auto",
        ...(width && { width: `${width}px` }),
        ...(height && { height: `${height}px` }),
        ...style,
      }}
      onError={handleError}
    />
  );
};
