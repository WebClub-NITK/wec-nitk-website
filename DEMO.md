# Project Demo

This document provides a demonstration of the key features of the WEC-NITK website.

## Search Feature

The website includes a powerful and fast search feature accessible from the navigation bar. This allows users to quickly find content across the entire site.

### How it Works

The search functionality is implemented as a client-side fuzzy search using the [Fuse.js](https://fusejs.io/) library. Here's a breakdown of the process:

1.  **Data Pre-fetching:** When the application first loads, it pre-fetches all the data for the following collections from the backend:
    *   Members
    *   Blogs
    *   Events
    *   Hackathons
    *   SIGs (Special Interest Groups)

2.  **Client-Side Fuzzy Search:** As the user types a query into the search bar, Fuse.js performs a fuzzy search on the `title` field of the pre-fetched data. This provides instant, typo-tolerant search results.

3.  **Displaying Results:** The search results are displayed in a dropdown list below the search bar, grouped by their type (e.g., "blog", "event").

### How to Use

1.  Click on the **Search Icon** in the navigation bar to open the search input.
2.  Start typing your search query.
3.  The results will appear instantly as you type.
4.  You can navigate the results using the arrow keys and press `Enter` to go to the selected page, or click on a result with the mouse.
5.  Press the `Escape` key or click the close icon to close the search bar.

### Backend Search API

In addition to the client-side search, there is a more comprehensive backend search API available at `/api/search`. This API can search through more collections and fields, including the body content of articles. However, this is not currently utilized by the main search bar in the navbar. It is available for future enhancements or for other clients to use.

## Demo Link:
https://drive.google.com/file/d/1vdQjCxmUs-Y2_qzucew_NmJ6KJ1lNIOW/view?usp=sharing