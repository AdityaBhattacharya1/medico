# Medico

<img src="./readme-assets/medico_banner.png" style="padding-bottom: 1rem; aspect-ratio: 16 / 9">

A digital doctor and hospital appointment booking app.

## Features

-   View premium and non-premium hospitals, professional doctors and others
-   Custom information page for each hospital with relevant information such as opening and closing times, location, website, etc.
-   Book appointments in a matter of a few steps, as simple simple and convenient as it gets
-   Browse hospitals and doctors by categories of medical specializations
-   Login using Google. Update patient name, if required, from the Profile tab
-   List of all booked appointments with pull-to-refresh feature in the Appointments tab
-   Search through a list of all neighboring hospitals and doctors in the Explore tab

## Technologies Used

-   React Native Expo
-   Strapi
-   MySQL
-   Clerk Authentication

## File Structure

```sh
.
├── app
│   ├── components
│   │   ├── appointments
│   │   ├── bookAppointment
│   │   ├── home
│   │   └── hospitalDoctors
│   ├── navigations
│   ├── screens
│   ├── services
│   └── shared
├── assets
│   └── fonts
├── hooks
├── readme-assets
└── teledoc-backend
    ├── build
    ├── config
    ├── database
    │   └── migrations
    ├── public
    │   └── uploads
    ├── src
    │   ├── admin
    │   ├── api
    │   │   ├── appointment
    │   │   │   ├── content-types
    │   │   │   │   └── appointment
    │   │   │   ├── controllers
    │   │   │   ├── routes
    │   │   │   └── services
    │   │   ├── category
    │   │   │   ├── content-types
    │   │   │   │   └── category
    │   │   │   ├── controllers
    │   │   │   ├── routes
    │   │   │   └── services
    │   │   ├── doctor
    │   │   │   ├── content-types
    │   │   │   │   └── doctor
    │   │   │   ├── controllers
    │   │   │   ├── routes
    │   │   │   └── services
    │   │   ├── hospital
    │   │   │   ├── content-types
    │   │   │   │   └── hospital
    │   │   │   ├── controllers
    │   │   │   ├── routes
    │   │   │   └── services
    │   │   └── slider
    │   │       ├── content-types
    │   │       │   └── slider
    │   │       ├── controllers
    │   │       ├── routes
    │   │       └── services
    │   └── extensions
    └── types
        └── generated
```

## Getting Started

### Pre-requisites

Either download the Expo Go app to run this app locally on your physical device or set up an emulator with Expo Go installed on it. [Read more on how to do this here.](https://docs.expo.dev/get-started/expo-go/)
<br />
MySQL needs to be installed and configured on your system.
<br />
Finally, create an account on [Clerk](https://clerk.com) and add in the Clerk public key into your `.env` file.

To run the app locally, follow these steps:

1.  **Clone this repository and navigate into the project**
    ```sh
    git clone https://github.com/AdityaBhattacharya1/medico
    cd medico
    ```
2.  **Install necessary packages and dependencies**
    <br />
    The Strapi backend rests inside the `teledoc-backend` folder.

    ```sh
    npm install

    cd teledoc-backend
    npm install
    ```

3.  **Run the app**
    <br />
    Add your Strapi public API key from the admin panel and the NGROK URL into the `.env` file.

    ```sh
    npm start &

    cd teledoc-backend
    npm start &

    npx ngrok http 1337
    ```    

    You should now be able to view the app via Expo Go.
    

## Screenshots

<details>
	<summary>View screenshots</summary>
<p align="left">
  <img src="" />
  <img src="" />
  <img src="" />
  <img src="" />
  <img src="" />
  <img src="" />
</p>
</details>

## Credits

-   [Aditya Bhattacharya](https://github.com/AdityaBhattacharya1/)
