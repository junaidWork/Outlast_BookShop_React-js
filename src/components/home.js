import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [book, setBook] = useState([]);
  const [pagination, setPagination] = useState(8);

  const loadMore = () => {
    setPagination(pagination + 4);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("https://gutendex.com/books/", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 400 || !response) {
      console.log("invalid Registration");
    } else {
      console.log("Stored Data==>", response);
      setBook(response.data.results);
    }
  };

  return (
    <>
      <Container style={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        {book.slice(0, pagination).map((item, index) => {
          return (
            <Card
              key={index}
              style={{ width: "18rem" }}
              className=" m-3 mb-2 bg-Info"
            >
              <Card.Body>
                <Link to={`/bookDetails/${item.id}`}>
                  {" "}
                  <img
                    src={item.formats["image/jpeg"]}
                    alt={item.title}
                    style={{ width: "80%" }}
                  />
                </Link>

                <Card.Title className="mt-3"> {item.title} </Card.Title>

                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
      <div className="col-md-12 text-center">
        <Button className="mt-3 mb-3" onClick={loadMore}>
          Load More Books
        </Button>
      </div>
    </>
  );
}
