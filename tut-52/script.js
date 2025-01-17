console.log(navigator.geolocation.getCurrentPosition((position) => {
    // console.log(position.coords.latitude);
    // console.log(position.coords.longitude);

    const {latitude,longitude} = position.coords;

    console.log("latitude ",latitude);
    console.log("longitude ",longitude);
}, (error) => {
    console.log(error.message);
}));