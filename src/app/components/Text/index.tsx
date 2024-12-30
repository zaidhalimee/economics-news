/** @jsx jsx */

import {
  ElementType,
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardedRef,
  useContext,
} from 'react';
import { jsx, Theme } from '@emotion/react';
import { RequestContext } from '../../contexts/RequestContext';
import helmetFontVariants from '../ThemeProvider/fontVariants/helmet';

import { GelFontSize, FontVariant } from '../../models/types/theming';

interface Props<T extends React.ElementType> {
  as?: T;
  className?: string;
  size?: GelFontSize;
  fontVariant?: FontVariant;
}

// This is a strongly typed polymorphic component inspired by https://itnext.io/react-polymorphic-components-with-typescript-f7ce72ea7af2
const Text = forwardRef(function Text<T extends ElementType = 'span'>(
  {
    as,
    children,
    className,
    size = 'pica',
    fontVariant = 'sansRegular',
    ...htmlAttributes
  }: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
  ref: ForwardedRef<HTMLElement>,
) {
  const Component = as || 'span';
  const { saveData } = useContext(RequestContext);
  return (
    <Component
      {...(ref && { ref })}
      css={({ fontSizes, fontVariants, palette }: Theme) => [
        {
          color: palette.GREY_10,
        },
        fontSizes[size],
        saveData ? helmetFontVariants[fontVariant] : fontVariants[fontVariant],
      ]}
      className={className}
      {...htmlAttributes}
    >
      {children}
    </Component>
  );
});

export default Text;
