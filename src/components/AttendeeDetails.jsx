import { useState } from "react";
import TicketUploader from "./TicketUploader";
import "../styling/attendeeDetails.css";
import Form from "./Form";

const AttendeeDetails = ({
  onNext,
  onBack,
  setProfileImageUrl,
  profileImageUrl,
  setUserDetails,
  userDetails,
}) => {
  // Function to update the profile image URL
  const handleUpload = (url) => {
    setProfileImageUrl(url);
  };

  const updateUserDetails = (newDetails) => {
    setUserDetails((prev) => ({ ...prev, ...newDetails }));
  };

  return (
    <section className="smaller">
      <div className="ticket-container">
        <div className="ticket-header">
          <h3>Attendee Details</h3>
          <h5 className="ticket-paging">Step 2/3</h5>
        </div>

        <hr className="hr-two" />

        <div className="ticket-case">
          <div className="ticket-main">
            {/* File Input */}
            <TicketUploader
              onUpload={(url) => {
                handleUpload(url); // Update profileImageUrl
                updateUserDetails({ profileImageUrl: url });
              }}
            />
          </div>

          <hr className="hr-styling" />

          {/* Pass profileImageUrl to Form */}
          <Form
            onNext={onNext}
            onBack={onBack}
            profileImageUrl={profileImageUrl}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
        </div>
      </div>
    </section>
  );
};

export default AttendeeDetails;
