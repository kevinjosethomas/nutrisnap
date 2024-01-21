import * as FileSystem from "expo-file-system";

function DataURIToBlob(dataURI) {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

  return new Blob([ia], { type: mimeString });
}

// async function IdentifyMeal(image) {
//   console.log("hi");
//   const formData = new FormData();
//   const i = DataURIToBlob(image);
//   formData.append("image", i, "IMAGE.jpg");

//   try {
//     const response = await fetch(
//       "https://api.logmeal.es/v2/image/segmentation/complete",
//       {
//         method: "POST",
//         formData,
//         headers: {
//           Authorization: `APIUser_Carson ${process.env.EXPO_PUBLIC_LOGMEAL_API_KEY}`,
//         },
//       }
//     );

//     const data = await response.text();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }

//   console.log("hi3");
// }

async function IdentifyMeal(image) {
  try {
    console.log("hi1");
    const response = await FileSystem.uploadAsync(
      "https://api.logmeal.es/v2/image/segmentation/complete",
      image,
      {
        fieldName: "image",
        httpMethod: "POST",
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        headers: {
          Authorization: `APIUser_Carson ${process.env.EXPO_PUBLIC_LOGMEAL_API_KEY}`,
        },
      }
    );
    console.log("hi2");

    console.log(JSON.stringify(response));
    console.log(response.body);
  } catch (e) {
    console.log(e);
    console.log(e.response);
  }
}

export { IdentifyMeal };
