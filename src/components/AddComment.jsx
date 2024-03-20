import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MY_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc1MTRjNTllYzAwMTk5MGQ2ZTUiLCJpYXQiOjE3MTA3NjU3MTYsImV4cCI6MTcxMTk3NTMxNn0.k4up4vz2nTcjQ16Lc7mvbDhDBn3Qt-9HLiiCb8lx1ko";
const MY_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = function (props) {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.id,
  });

  const newComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(MY_URL, {
        method: "Post",
        body: JSON.stringify(comment),
        headers: {
          Authorization: MY_KEY,
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        alert("Grazie per la recensione");

        setComment({
          comment: "",
          rate: 1,
          elementId: props.id,
        });
      } else {
        throw new Error("C'è qualche problema");
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  };

  useEffect(() => {
    setComment({
      ...comment,
      elementId: props.id,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  return (
    <div>
      <Form onSubmit={newComment}>
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci una recensione"
            value={comment.comment}
            onChange={(e) => {
              setComment({
                ...comment,
                comment: e.target.value,
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) => {
              setComment({
                ...comment,
                rate: e.target.value,
              });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="success" type="submit">
          Invia recensione
        </Button>
      </Form>
    </div>
  );
};
export default AddComment;
