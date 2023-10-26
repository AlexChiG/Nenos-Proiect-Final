import React from "react";

function BulkOperations(bulkEdit, bulkDelete) {
  const handleBulkEdit = () => {
    bulkEdit();
  };

  const handleBulkDelete = () => {
    bulkDelete();
  };

  return (
    <div>
      <button onClick={handleBulkEdit}>Bulk Edit</button>
      <button onClick={handleBulkDelete}>Bulk Delete</button>
    </div>
  );
}

export default BulkOperations;
