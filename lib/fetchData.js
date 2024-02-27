export const fetchPhotosData = async (query) => {
  try {
    const res = await fetch(`http://18.143.17.23:5173/api/photo-gallery?${query}`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchTeachersPhotos = async (query) => {
  try {
    const res = await fetch(`http://18.143.17.23:5173/api/teachers?${query}`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return res.json();
  } catch (error) {
    console.log(error);
  }
}