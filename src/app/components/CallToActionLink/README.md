## Description

A standalone link component. Used on banners, uploader CTAs and download pages.

By default centre align and text-decoration: underline styles are applied. These can be overriden with bottom border styles.

## Props

| Name                | type                  | Description                                                                         |
| ------------------- | --------------------- | ----------------------------------------------------------------------------------- |
| href                | string                | Link to the CTA link destination                                                    |
| className           | string                | used for passing styles                                                             |
| children            | JSX Node              | Contains text for link and/or chevron                                               |
| eventTrackingData   | EventTrackingMetadata | Contains click and view tracking data for Piano                                     |
| size                | GelFontSize           | used for Text component                                                             |
| fontVariant         | FontVariant           | used for Text component                                                             |
| download            | boolean               | adds html download attribute                                                        |
| ignoreLiteExtension | boolean               | removes .lite extension from href                                                   |
| borderStyleOverride | string                | overrides text-decoration:underline behaviour and flex centre align styles          |
| linkText            | boolean               | Text for link. Required for borderStyleOverride to prevent chevron being underlined |

## Example ltr/rtl

### With default centre align and underline styles

```javascript
<CallToActionLink href={link} eventTrackingData={eventTrackingData}>
  {linkText}
  {isRtl ? (
    <LeftChevron css={styles.chevron} />
  ) : (
    <RightChevron css={styles.chevron} />
  )}
</CallToActionLink>
```

### With bottom border styles and with a chevron

```javascript
<CallToActionLink href={link} text={linkText} borderStyleOverride>
  {isRtl ? (
    <LeftChevron css={styles.chevron} />
  ) : (
    <RightChevron css={styles.chevron} />
  )}
</CallToActionLink>
```

### With bottom border styles and without a chevron

```javascript
<CallToActionLink
  href={link}
  text={linkText}
  borderStyleOverride
  css={[styles.bottomLinkSpacing, styles.link]}
/>
```
