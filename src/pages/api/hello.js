import axios from "axios";

const fetch = (filename) =>
    new Promise((resolve, reject) => {
        axios
            .post(
                `${process.env.HOSTNAME}/.netlify/functions/file-read-write`,
                {
                    filename,
                }
            )
            .then(({ data }) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err.message);
            });
    });

export default function handler(req, res) {
    const { filename } = req.body;
    console.log("hostname", process.env.HOSTNAME);
    if (!typeof filename === "string")
        return res.status(200).json({ data: "filename not defined" });
    fetch(filename)
        .then((data) => res.status(200).json({ data }))
        .catch((err) => res.status(200).json({ data: err.message }));
}
