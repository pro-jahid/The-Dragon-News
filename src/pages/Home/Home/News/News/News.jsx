import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInside from "./EditorsInside/EditorsInside";

const News = () => {
  const news = useLoaderData();
  const { category_id, image_url, title, details } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft></FaArrowLeft>
              All News In This Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInside></EditorsInside>
    </div>
  );
};

export default News;
