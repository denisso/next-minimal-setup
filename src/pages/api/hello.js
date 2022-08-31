import { runWatch} from "../../lib/content"

export default function handler(req, res) {
    runWatch()
    res.status(200).json({ name: "John Doe" });
}
