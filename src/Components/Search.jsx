
import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';

{/*--------------------------------------------------------------
  # Search Components
    -------------------------------------------------------------- */}
export default function SearchPage() {
  return (
    <div className="w-auto p-3" style={{ backgroundColor: "#eee" }}>
      <MDBInput label='Search' />
    </div>
  );
}