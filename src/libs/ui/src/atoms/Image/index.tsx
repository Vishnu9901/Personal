interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}
export const Image: React.FC<ImageProps> = ({ src, alt, className = '', width, height, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className}`}
      width={width}
      height={height}
      {...rest}
    />
  );
};