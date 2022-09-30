const fetchUserDetails = (userID, callback) => {
  console.log("Fetching User details");
  setTimeout(() => {
    callback(`http://image.example.com/${userID}`);
  }, 500)
};
const downloadImage = (imageURL, callback) => {
  console.log("Downloading image");
  setTimeout(() => {
    callback(` image data for ${imageURL}`);
  }, 500)
};
const render = (image) => {
  console.log("Rendering image ");
};

fetchUserDetails("Ganesh", (imageURL) => {
  downloadImage(imageURL, (imageData) => {
    render(imageData);
  })
})
