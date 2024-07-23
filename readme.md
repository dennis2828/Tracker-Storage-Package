# TrackerStorage
[![TrackerStorage](https://res.cloudinary.com/dulb5sobi/image/upload/v1721584593/je4bobjyi8h9ciwsts0g.png "TrackerStorage")](https://res.cloudinary.com/dulb5sobi/image/upload/v1721584593/je4bobjyi8h9ciwsts0g.png "TrackerStorage")

**TrackerStorage** is a powerful tool for developers to store and track various types of data or events within their applications. Whether you need to capture errors, clicks, debug information, or other critical events, TrackerStorage provides a simple and efficient way to handle and display this data on a dedicated dashboard.

## Features
- **Chunk Storage:** Store any type of data or event you want to track, along with its name and type.

- **Error Tracking:** Seamlessly capture and log errors using a simple API call within your try-catch blocks.

- **Dashboard Display:** Visualize and manage your tracked data through an intuitive dashboard.

## Installation
`npm install tracker-storage`

## Initialization
    import { TrackerStorageInitializer } from "../../tracker-storage-package/dist";
	
    const TrackerStorage = new TrackerStorageInitializer(YOUR_API_KEY);

## Usage
- **.track()** accepts two parameters, the first one is your chunk object which you want to keep track of, and the second is an object of options

try{
    const res = await fetch(URL);
        	...
}catch(err) {
    TrackerStorage.track({error: err, meta:{occured: new Date()}},{name:"Error on fetching",type:"FAIL"})
    /* other handling */
}
- **type**: **SUCCESS | FAIL | OTHER**, which will differentiate the objects on the dashboard
