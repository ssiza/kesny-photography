// This function will handle all the dynamic input fields in the booking forms.
function setupOtherFields() {
    const forms = document.querySelectorAll('.booking-form');
    forms.forEach(form => {
         // Contact Details Field
        const contactMethodSelect = form.querySelector("#contactMethod");
        const contactDetailsInput = form.querySelector("#contactDetails");
        if (contactMethodSelect) {
             contactMethodSelect.addEventListener('change', function() {
                 contactDetailsInput.style.display = (this.value === 'email' || this.value === 'phone') ? 'block' : 'none';
                   contactDetailsInput.required = (this.value === 'email' || this.value === 'phone')
            });
        }
        // Session Length Field
        const sessionLengthSelect = form.querySelector("#sessionLength");
        const sessionLengthOtherInput = form.querySelector("#sessionLengthOther");

        // Location Preference Field
        const locationPreferenceSelect = form.querySelector("#locationPreference");
        const locationPreferenceOtherInput = form.querySelector("#locationPreferenceOther");

        // Session Purpose Field
        const sessionPurposeSelect = form.querySelector("#sessionPurpose");
        const sessionPurposeOtherInput = form.querySelector("#sessionPurposeOther");

        if (sessionLengthSelect) {
            sessionLengthSelect.addEventListener('change', function() {
                sessionLengthOtherInput.style.display = this.value === 'other' ? 'block' : 'none';
                sessionLengthOtherInput.required = this.value === 'other';
            });
        }
        if (locationPreferenceSelect) {
            locationPreferenceSelect.addEventListener('change', function() {
                locationPreferenceOtherInput.style.display = this.value === 'other' ? 'block' : 'none';
                locationPreferenceOtherInput.required = this.value === 'other';
            });
        }
        if (sessionPurposeSelect) {
            sessionPurposeSelect.addEventListener('change', function() {
                sessionPurposeOtherInput.style.display = this.value === 'other' ? 'block' : 'none';
                sessionPurposeOtherInput.required = this.value === 'other';
            });
        }
    });
}

function setupFormSubmission() {
    const bookingForms = document.querySelectorAll('.booking-form');
    const confirmationOverlay = document.getElementById('confirmation-overlay');
    const confirmationModal = document.getElementById('confirmation-modal');
    const confirmationContent = document.getElementById('confirmation-content');
    const editButton = document.getElementById('edit-button');
    const submitButton = document.getElementById('submit-button');

    bookingForms.forEach(form => {
        form.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent default form submission
          // Collect form data
            const formData = new FormData(form);
             const data = {};
            formData.forEach((value, key) => {
              data[key] = value;
            });

             // Clear previous content
            confirmationContent.innerHTML = '';

            // Populate confirmation content
             for (const key in data) {
                 if (data.hasOwnProperty(key)) {
                    const label = form.querySelector(`[for="${key}"]`)?.textContent || key;
                     const value = data[key];
                      const element = document.createElement('p');
                       element.innerHTML = `<strong>${label}:</strong> ${value}`;
                    confirmationContent.appendChild(element);
                 }
            }
                // show confirmation modal and overlay
                confirmationOverlay.style.display = 'flex'
              // Set click handlers
              editButton.onclick = function(){
                 confirmationOverlay.style.display = 'none'
              };

             submitButton.onclick = function() {
               // Submit form
                const submitButton = form.querySelector('button[type="submit"]'); // Find submit button
              const originalButtonText = submitButton.textContent; // Store original button text
                submitButton.disabled = true; // Disable the submit button to prevent multiple submissions
              submitButton.textContent = "Submitting..."; // Update the button text to indicate submitting
              form.submit(); // Submit the form to formspree, use `form.submit()` to trigger the form's action
                setTimeout(() => {
                   submitButton.disabled = false; // Re-enable submit button
                      submitButton.textContent = originalButtonText; // Return to original text
                      confirmationOverlay.style.display = 'none' // Close modal
                       alert('Thank you for your submission! We will contact you shortly.'); // Alert the client that the submission was successful
                   form.reset(); // Reset the form after submission
                    setupOtherFields();
                  }, 500);
            }
         });
    });
}

 document.addEventListener('DOMContentLoaded', function() {
    setupOtherFields();
    setupFormSubmission();

  // --- Date Picker ---
   flatpickr("#preferredDate", {});

    // --- Time Dropdown ---
      const timeSelect = document.getElementById('preferredTime');
      const startTime = 8;
        const endTime = 17; // 5:00 PM
        for (let hour = startTime; hour <= endTime; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
                const formattedHour = String(hour).padStart(2, '0');
                  const formattedMinute = String(minute).padStart(2, '0');
                     const timeString = `${formattedHour}:${formattedMinute}`;
                  const option = document.createElement('option');
                      option.value = timeString;
                     option.text = timeString;
                    timeSelect.appendChild(option);
              }
         }
    });