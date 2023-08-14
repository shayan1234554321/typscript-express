import express, {Request , Response ,NextFunction} from "express";
import { Person } from "./interfaces";

const app = express();

app.use(express.json());

app.get("/:firstName/:lastName", (req: Request, res: Response) => {

  const { firstName , lastName } = req.params;
  const person: Person = {
    firstName,
    lastName,
    age:0
  }

  function greet( object: Person ):string {
    return `Hello ${object.firstName} ${object.lastName}`
  }

  const greeting = greet(person)

  return res.send(greeting);
});

app.listen(4000, () => {
  console.log("application running on port 4000");
}); 
