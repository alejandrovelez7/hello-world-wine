import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WineCard = ({ name, description, link, facts, wineryInfo, pairing }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">{description}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary" onClick={handleShow}>
            More Info
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Facts: </strong>{facts}</p>
          <p><strong>Pairing: </strong>{pairing}</p>
          <p><strong>About the winery: </strong> {wineryInfo}</p>
          <Link to={link} target="_blank">Check me out on Vivino!</Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WineCard;
