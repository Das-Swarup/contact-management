## Contacts App

In this app, users can add contacts by clicking on the "Create Contact" button, which opens a pop-up form. The form requires the user to provide the contact's name, last name, and status attributes.

There is a validation in place to ensure that all attributes are filled out before submitting the contact.

### Home Page

On the home page (`/`), users can manage their contacts. The page consists of two sections:

- **Sidebar**: Provides navigation to different routes within the application.
- **Contacts Management**: Users can view, edit, and delete contact details. Clicking on the "View" button displays the contact details, while the "Edit" button allows users to modify any attribute of the contact. The form dynamically updates based on the selected contact. The "Delete" button removes the contact from the list.

### Charts and Maps Page

On the second page (`/chartsandmaps`), users can visualize COVID-19 data through charts and maps. The page includes two sections:

- **Sidebar**: Provides navigation to different routes within the application.
- **Charts and Maps**: The chart section displays a line graph of COVID-19 active cases over time using Chart.js. The map section shows markers for different countries. Clicking on a marker displays a pop-up with the country's name, along with the total number of active, recovered, and deceased cases. This feature is implemented using React-Leaflet and MapTiler.

All pages in the application are responsive and optimized for various screen sizes, including desktop, tablet, and mobile devices.

### Tech Stack

The application was built using the following tech stacks:

- HTML, CSS, and TypeScript for the foundational structure and styling.
- React.js and React-Router for building the application components and managing routing.
- JSON-Server and API integration for data storage and retrieval.
- Chart.js for creating interactive charts and graphs.
- React-Leaflet for rendering the map component.
- MapTiler for obtaining and displaying country-specific data on the map.

## Installation

To get started with the Contacts App, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/contacts-app.git

2. Navigate to the project directory:

    ```shell
    cd contacts-app

3. Install the dependencies using npm:

    ```shell
    npm install OR yarn

4. To run the app:

    ```shell
    yarn run dev OR npm run dev

    App will open at http://localhost:5173/

5. To run server at localhost:3000:

    ```shell
    json-server --watch db.json

