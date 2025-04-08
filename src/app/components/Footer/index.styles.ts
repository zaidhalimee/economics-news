import { css, Theme } from '@emotion/react';
import pixelsToRem from '#app/utilities/pixelsToRem';
import { FULL } from '../ThemeProvider/spacings';

const styles = {
  paragraph: ({ palette, spacings }: Theme) =>
    css({
      color: palette.WHITE,
      margin: 0,
      padding: `${spacings.DOUBLE}rem 0`,
      a: { padding: 0 },
    }),
  paragraphWithBorderBottom: ({ palette, spacings }: Theme) =>
    css({
      borderBottom: `0.0625rem solid ${palette.SHADOW}`,
      color: palette.WHITE,
      margin: 0,
      padding: `${spacings.DOUBLE}rem 0`,
    }),
  siteWideLinksWrapper: ({
    palette,
    fontSizes,
    fontVariants,
    mq,
    spacings,
  }: Theme) =>
    css({
      ...fontSizes.brevier,
      ...fontVariants.sansRegular,
      backgroundColor: palette.EBON,
      padding: `0 ${spacings.DOUBLE}rem`,
      [mq.GROUP_1_MAX_WIDTH]: {
        padding: `0 ${FULL}rem`,
      },
    }),
  ampCookieSettingButton: ({ palette, spacings, fontVariants }: Theme) =>
    css({
      ...fontVariants.sansBold,
      background: 'none',
      border: 'none',
      color: palette.WHITE,
      cursor: 'pointer',
      display: 'block',
      padding: `${spacings.FULL}rem 0 ${spacings.FULL}rem`,
      textDecoration: 'none',
      textAlign: 'left',
      width: '100%',
      '&:hover, &:focus': {
        textDecoration: 'underline',
      },
    }),
  constrainedWrapperWithTrustProjectLink: ({ spacings, gridWidths }: Theme) =>
    css({
      maxWidth: `${pixelsToRem(gridWidths[1280])}rem`,
      margin: '0 auto',
      paddingTop: `${spacings.FULL}rem`,
    }),

  constrainedWrapperWithoutTrustProjectLink: ({ gridWidths }: Theme) =>
    css({
      maxWidth: `${pixelsToRem(gridWidths[1280])}rem`,
      margin: '0 auto',
    }),
};

export default styles;
