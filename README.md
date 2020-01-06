# naps-app-2
Version 2 of NaPS App.

## About NaPS App 2.0
NaPS App 2.0 is a project by Eric Hove. It is an extension of the original NaPS App built by Eric Hove, Alan Wagner, and Andrew Burns.

NaPS App 2.0 aims to make the public data hosted by the National Parks Service (NPS) and the National Oceanic and Atmospheric Administration (NOAA) accessible to users planning a trip to a National Park in the United States. Users can search for a National Park using keywords. Users can select a result to learn more about the park selected, including information about campgrounds and an upcoming weather forecast provided by NOAA. Prior search results are saved using the user's local storage easing navigation.

Additional updates are coming.

NaPS App 2.0 last updated on 2019-10-12.

A deployed version may be found at: https://safe-waters-09131.herokuapp.com/ .

## Work Log

### Done

#### Version 2.0 (Base Version) -- Deployed 2019-10-12
* User can search for national parks based on keyword.
* App displays a list of results
* When the user selects a park in the results list, they are provided with additional information about the park and a 3 to 5 day weather forecast.
* Essentially three pages on the front end: Main page with the search and results, a detail page, and an About page
* Local storage for last search results to ease navigation

### In-Progress

#### Version 2.b (Authentication) --STARTED 2019-10-13; PAUSED 2020-01-05
* Done + authentication, likely through firebase.
* Additional page for login, sign-up.

### To-Do/Forthcoming

#### Version 2.c (Favorites)
* Done + allow signed in user to save 'favorite' parks.

#### Version 2.d (Forum)
* Done + allow signed in users to post comments about a given park.

#### Version 2.e (Backend restructure)
* Done + restructured backend to auto-query the park data base daily and save so the user isn't making the initial request each time they search. Speed up loading hopefully.

#### Version 2.f (Accessibility improvements)
* Done + Restructure HTML elements to improve accessibility/508 compliance.

#### Version 2.g (UI improvements)
* Done + UI/UX improvements. Icons for weather forecast, etc.

#### Version 2.h (Google Maps Integration)
* Done + Google Maps API Integration for directions.

#### Version 2.i (state cleanup) --STARTED 2020-01-05
* Done + state cleanup using Redux or React's ContextAPI (possibly)

## Technologies Used
NaPS App 2.0 uses the following technologies:
* ReactJS,
* NodeJS,
* ExpressJS,
* React-Bootstrap,
* React-Router,
* React-Helmet,
* Heroku,
* an API provided by the National Parks Service (NPS), and
* an API provided by the National Oceanic and Atmospheric Administration (NOAA).

## What Does NaPS App 2.0 Look Like?
![Main Screen](https://eghove.github.io/img/portfolio/naps-app-v2-Main_Screen.PNG "Main Screen")

![Search Results](https://eghove.github.io/img/portfolio/naps-app-v2-Search_Results.PNG "Search Results")

![Park and Weather Information](https://eghove.github.io/img/portfolio/naps-app-v2-Weather.PNG "Park and Weather Information")

![Park Campground Information](https://eghove.github.io/img/portfolio/naps-app-v2-Campgrounds.PNG "Park Campground Information")

![Prior Search Results](https://eghove.github.io/img/portfolio/naps-app-v2-Prior_Results.PNG "Park Campground Information")



