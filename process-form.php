<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $to = 'your-email@example.com'; // Replace with your email address
  $subject = 'New message from contact form';

  // Retrieve form data
  $firstName = $_POST['first-name'];
  $lastName = $_POST['last-name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Construct email body
  $body = "First Name: $firstName\n";
  $body .= "Last Name: $lastName\n";
  $body .= "Email: $email\n";
  $body .= "Message:\n$message";

  // Set additional headers
  $headers = "From: $email";
  
  // Send email
  if (mail($to, $subject, $body, $headers)) {
    echo 'Message sent successfully.';
  } else {
    echo 'Message sending failed.';
  }
}
?>
