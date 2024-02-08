import { app } from "./index";
import "dotenv/config";

const port = process.env.PORT as string;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
