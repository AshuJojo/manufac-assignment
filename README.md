
# Manufac Assignment

## Problem Statement
We are expected to perform some analytics over the [Indian agriculture dataset](https://drive.google.com/file/d/1p1UW__9DvRuscA01kUFTMz_CUMKvTbyM/view) (made available by [National Data and Analytics Platform](https://ndap.niti.gov.in/info?tab=about), NITI Aayog) and then display them as tables. 

## Demo 

View Live Application Here: https://manufac-assignment-red.vercel.app/

Fork and run this application using below command: 

```
yarn install
yarn dev
```

## Overview
 
It is a web app that processes the given crop data and displays `Crop with Maximum & Minimum Production in that Year` & `Average Yield & Average Cultivation Area of the Crop between 1950-2020`.

## Screenshots

### Crop with Maximum & Minimum Production in that Year
![Screenshot (12)](https://github.com/user-attachments/assets/c9fb6d1b-cdb4-4ae9-91fa-bafc057b2377)

### Average Yield & Average Cultivation Area of the Crop between 1950-2020
![Screenshot (13)](https://github.com/user-attachments/assets/5b9841ad-79fd-42dd-90bb-11fbc2bac0d8)

## Features

* Used Mantine `Tabs` component to seperate both tables.
* When clicking on any tab, the table scroll into view from start. This functionality is implemented through Mantine `useScrollIntoView` hook.
* Used `lazy loading` to load Crop Data in Home component, So to make sure user does not have to wait for whole data to load at the first visit.
* Created Pure functions as util functions to get `Crop with Maximum & Minimum Production in that Year` & `Average Yield & Average Cultivation Area of the Crop between 1950-2020`.
* Created CustomTable with Mantine `Table` component to pass and show data which is returned from util functions.
* Organize the code for scalibility & reusablity.
* Used constants for Crop data keys values so that developer does not falls into typo errors while accessing Crop data with CropData interface.
* Used module css to style components wherever needed.

## Tech Stack

* TypeScript
* React.js 18
* [Mantine v7](https://mantine.dev/) 
* Mantine Hooks
