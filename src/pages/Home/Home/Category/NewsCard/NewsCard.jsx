import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, thumbnail_url, author, rating, total_view } = news;
  return (
    <Card className="news-card mb-4 shadow-sm">
      <Card.Header className="d-flex align-items-center bg-white border-bottom-0">
        <Image
          style={{ height: '50px', width: '50px' }}
          src={author?.img}
          roundedCircle
          className="border"
        />
        <div className="ps-3 flex-grow-1">
          <p className="mb-0 fw-bold">{author?.name}</p>
          <p className="text-muted mb-0"><small>{moment(author?.published_date).format('YYYY-MM-DD')}</small></p>
        </div>
        <div className="text-muted">
          <FaRegBookmark className="me-3 cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Img
          variant="top"
          src={thumbnail_url}
          className="rounded mb-3 img-fluid"
        />
        <Card.Text className="text-justify">
          {details.length < 250 ? (
            details
          ) : (
            <>
              {details.slice(0, 250)}... <Link to={`/news/${_id}`} className="text-decoration-none">Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-top-0 text-muted d-flex align-items-center">
        <div className="flex-grow-1 d-flex align-items-center">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar className="text-warning" />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar className="text-warning" />}
          />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2" /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
