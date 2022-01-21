import Axios from "axios";

const getAbout = async (setAbout) => {
  await Axios.get("https://dogukan-blog.test/api/about")
    .then((res) => setAbout(res.data.data))
    .catch((e) => console.log(e));
};

export default getAbout;
