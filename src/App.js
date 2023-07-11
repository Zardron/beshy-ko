import { useState } from "react";
import "./App.css";
import beshy from "./assets/beshy.gif";
import myAvatar from "./assets/pic.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Avatar,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";

function App() {
  var str = "Bat malungkot ang beshy ko";
  const [message, setMessage] = useState("");

  str = message.replace(/\s+/g, " 🤸 ").toLowerCase();
  console.log(`${str}`); // "sonic-free-games"
  return (
    <div className="bg-gray-50 w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <Card className="bg-gray-100 flex flex-col justify-center items-center p-10">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          BAT 🤸 MALUNGKOT 🤸 ANG 🤸 BESHIE 🤸 KO
        </Typography>
        <Card className="max-w-[24rem] overflow-hidden mt-16 w-[320px]">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img src={beshy} alt="ui/ux review check" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="text-center">
              BESHY MAKER
            </Typography>
            <Typography
              className="text-md mt-4"
              variant="p"
              color="blue"
              textGradient
            >
              <Textarea
                label="Result"
                readOnly
                className=" cursor-none"
                value={str}
              ></Textarea>
            </Typography>
            <div className="relative mt-4 flex w-full max-w-[24rem]">
              <Button
                size="sm"
                className="outline-inherit border-none bg-transparent shadow-none !absolute right-1 top-1 rounded"
              >
                🤸
              </Button>
              <Input
                type="email"
                label="Type Your Beshy Words Here"
                value={message}
                className="pr-20"
                onChange={(e) => setMessage(e.target.value)}
                containerProps={{
                  className: "min-w-0",
                }}
              />
            </div>
          </CardBody>
          <CardFooter className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Typography className="font-normal">Created by:</Typography>

              <Tooltip content="Zardron Angelo Pesquera">
                <Avatar
                  size="sm"
                  variant="circular"
                  alt="Zardron Angelo Pesquera"
                  src={myAvatar}
                  className="border-2 border-white hover:z-10"
                />
              </Tooltip>
            </div>
          </CardFooter>
        </Card>
      </Card>
    </div>
  );
}

export default App;
