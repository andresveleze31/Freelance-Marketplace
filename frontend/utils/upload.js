import axios from "axios";

async function upload(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "marketplace");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dzqjzwdpi/image/upload",
      data
    );

    const {url} = res.data;
    return url
  } catch (error) {
    console.log(error);
  }
}

export default upload;
