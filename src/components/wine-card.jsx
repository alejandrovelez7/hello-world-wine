import * as React from "react";

const WineCard = ({ name, description, link }) => {
  return (
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <p class="card-text">{description}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default WineCard;
