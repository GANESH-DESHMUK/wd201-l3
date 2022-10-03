const fetchUserDetails = (userID) => {
  console.log("Fetching User details");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`http://image.example.com/${userID}`);
    }, 500)
  })
};
const downloadImage = (imageURL) => {
  console.log("Downloading image");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`image data for ${imageURL}`);
    }, 500)
  })
};
const render = (image) => {
  console.log("Rendering image ");
};

fetchUserDetails("Ganesh")
  .then((iamgeURL) => downloadImage(imageURL))
  .then((imageData) => render(imageData))
  .catch((error) => {
    console.log('error');
  })
