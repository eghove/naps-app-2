# naps-app-2
Version 2 of NaPS App.

## About NaPS App 2.0
NaPS App 2.0 is a project by Eric Hove. It is an extension of the original NaPS App built by Eric Hove, Alan Wagner, and Andrew Burns.

NaPS App 2.0 aims to make the public data hosted by the National Parks Service (NPS) and the National Oceanic and Atmospheric Administration (NOAA) accessible to users planning a trip to a National Park in the United States.

Additional updates are coming.

NaPS App 2.0 last updated on 2019-10-12.

## Work Log

### Done

### To-Do
#### Version 2.a (Base Version) -- IN PROGRESS
* User can search for national parks based on keyword.
* App displays a list of results
* When the user selects a park in the results list, they are provided with additional information about the park and a 3 to 5 day weather forecast.
* Essentially three pages on the front end: Main page with the search and results, a detail page, and an About page
* Local storage for last search results to ease navigation

#### Version 2.b (Authentication)
* Done + authentication, likely through firebase.
* Additional page for login, sign-up.

#### Version 2.c (Favorites)
* Done + allow signed in user to save 'favorite' parks.

#### Version 2.d (Forum)
* Done + allow signed in users to post comments about a given park.

#### Version 2.e (Backend restructure)
* Done + restructured backend to auto-query the park data base daily and save so the user isn't making the initial request each time they search. Speed up loading hopefully.

#### Version 2.f (Accessibility improvements)
* Done + Restructure HTML elements to improve accessibility/508 compliance.

## Technologies Used
NaPS App 2.0 uses the following technologies:
* ReactJS,
* NodeJS,
* React-Bootstrap,
* React-Router,
* React-Helmet,
* Heroku,
* an API provided by the National Parks Service (NPS), and
* an API provided by the National Oceanic and Atmospheric Administration (NOAA).