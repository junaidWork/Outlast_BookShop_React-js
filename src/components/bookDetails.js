import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

export default function BookDetails() {
  let { id } = useParams();
  const [bookDetail, setBookDetail] = useState([]);

  useEffect(() => {
    singleBook();
  }, []);

  const singleBook = async () => {
    const response = await axios.get(`https://gutendex.com/books/?ids=${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 400 || !response) {
      console.log("invalid Registration");
    } else {
      console.log("Stored Data==>", response);
      setBookDetail(response.data.results);
    }
  };

  return (
    <>
      <Link to="/">
        <Button variant="primary" className="m-3">
          Back{" "}
        </Button>
      </Link>{" "}
      {bookDetail.map((obj) => {
        return (
          <>
            <div className=" text-center">
              <Card className="m-5" style={{ width: "20rem", height: "10rem" }}>
                <Card.Img variant="top" src={obj.formats["image/jpeg"]} />
                <Card.Body>
                  <Card.Title>
                    <h3>Title: {obj.title}</h3>
                  </Card.Title>
                  <Card.Text>
                    <h4>Author: {obj.authors[0].name}</h4>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </>
  );
}
