type IImageItem = {
  id: string;
  url: string;
};

type LazyImageProps = {
  src: string;
  alt: string;
};

type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNativeTypes;
