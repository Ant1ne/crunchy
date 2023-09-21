import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export default async function handler(req, res) {
  try {
    const responce = await axios(
      BASE_URL +
        "/findplacefromtext/json" +
        "?fields=formatted_address,name,rating,opening_hours,geometry,photos" +
        "&input=" +
        req.query.searchtext +
        "&inputtype=textquery" +
        "&locationbias=circle:20000@" +
        req.query.lat +
        "," +
        req.query.lng +
        "&key=" +
        GOOGLE_API_KEY
    );

    const data = responce.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}
