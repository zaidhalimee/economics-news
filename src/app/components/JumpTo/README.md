## Description - WORK IN PROGRESS - COMPLETE IN SUBTASK

The JumpTo component serves as an in-page navigation menu, similar to a table of contents, allowing users to quickly jump to specific sections within an article. This component renders an `H2` heading, a list of section titles as clickable `anchor` links, and groups them within a `navigation` region. When a link is clicked, the page scrolls down to the relevant section, identified by matching anchor `ids`.

This component is typically used in articles where multiple sections are displayed, enhancing content accessibility by providing quick navigation options....

## Props

| Name              | type                  | Description                                     |
| ----------------- | --------------------- | ----------------------------------------------- |
| jumpToData        | object                | Contains article sections with titles and IDs   |
| eventTrackingData | eventTrackingMetadata | Contains click and view tracking data for Piano |
