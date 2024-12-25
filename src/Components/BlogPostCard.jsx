import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const BlogPostCard = ({ item }) => {
  const { sendblog, date, id, time, thumbnail } = item;
  return (
    <>
      <Link to={`/blogs/${id}`}>
        <Card className="w-96 transition ease-out delay-100 bg-white  hover:scale-95  duration-300 ">
          <CardHeader shadow={false} floated={false} className="h-96 ">
            <img
              src={thumbnail}
              alt="card-image"
              className="h-full w-full object-cover "
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {sendblog.title}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {date}
              </Typography>
            </div>
            <div>
   <Typography color="blue-gray" className="font-medium">
     {sendblog.category}
   </Typography>
 </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              With plenty of talk and listen time, voice-activated Siri access,

            </Typography>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};
