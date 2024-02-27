import { FC, MouseEvent } from "react";
import cn from "classnames";
import Image, { ImageProps } from "next/image";
import { isFunction } from "lodash";

export type TImageWrapper = {
  onWrapperClick?: (e: MouseEvent<HTMLDivElement>) => void;
  imageClassName?: string;
  wrapperClassName?: string;
  isTypeWebp?: boolean;
} & ImageProps;

const ImageWrapper: FC<TImageWrapper> = (props) => {
  const { imageClassName, onWrapperClick, wrapperClassName, ...rest } = props;
  return (
    <div
      className={cn("img-wrapper", wrapperClassName)}
      onClick={(e) => {
        if (isFunction(onWrapperClick)) {
          onWrapperClick(e);
        }
      }}
    >
      <Image
        {...rest}
        className={cn("img-wrapper_image", imageClassName)}
        // loading="eager"
      />
    </div>
  );
};

export default ImageWrapper;
