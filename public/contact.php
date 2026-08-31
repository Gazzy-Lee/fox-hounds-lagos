<?php
// Fox & Hounds Contact Form Handler
// =====================================
// This script handles form submissions from the website and sends emails

// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// Set headers for CORS and JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Please use POST.'
    ]);
    exit();
}

// Configuration
$to_email = 'info@foxandhoundslagos.com';
$from_email = 'noreply@foxandhoundslagos.com'; // Update this to match your domain
$website_name = 'Fox & Hounds Lagos';

// Get POST data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
if (!$data) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request data.'
    ]);
    exit();
}

$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';
$form_type = isset($data['formType']) ? trim($data['formType']) : 'Contact';

// Server-side validation
$errors = [];

// Validate name
if (empty($name)) {
    $errors[] = 'Name is required.';
} elseif (strlen($name) < 2) {
    $errors[] = 'Name must be at least 2 characters long.';
} elseif (strlen($name) > 100) {
    $errors[] = 'Name must not exceed 100 characters.';
}

// Validate email
if (empty($email)) {
    $errors[] = 'Email is required.';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please provide a valid email address.';
}

// Validate message
if (empty($message)) {
    $errors[] = 'Message is required.';
} elseif (strlen($message) < 10) {
    $errors[] = 'Message must be at least 10 characters long.';
} elseif (strlen($message) > 5000) {
    $errors[] = 'Message must not exceed 5000 characters.';
}

// Check for suspicious content (basic spam prevention)
$suspicious_patterns = [
    '/\[url=/i',
    '/\[link=/i',
    '/<a href/i',
    '/viagra/i',
    '/cialis/i',
    '/casino/i',
];

foreach ($suspicious_patterns as $pattern) {
    if (preg_match($pattern, $message) || preg_match($pattern, $name)) {
        $errors[] = 'Suspicious content detected. Please revise your message.';
        break;
    }
}

// If there are validation errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Validation failed.',
        'errors' => $errors
    ]);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$form_type = htmlspecialchars($form_type, ENT_QUOTES, 'UTF-8');

// Prepare email subject based on form type
$subject_map = [
    'Contact' => 'New Contact Form Submission',
    'Restaurant' => 'Restaurant Table Reservation Request',
    'Event' => 'Event Inquiry Submission'
];
$subject = isset($subject_map[$form_type]) ? $subject_map[$form_type] : 'New Form Submission';
$subject = "[$website_name] $subject";

// Prepare email body
$email_body = "
New $form_type form submission from $website_name

-----------------------------------
SUBMISSION DETAILS
-----------------------------------

Name:    $name
Email:   $email
Date:    " . date('F j, Y, g:i a') . "
IP:      " . $_SERVER['REMOTE_ADDR'] . "

-----------------------------------
MESSAGE
-----------------------------------

$message

-----------------------------------

This email was sent from the $website_name contact form.
";

// Prepare email headers
$headers = [
    "From: $website_name <$from_email>",
    "Reply-To: $name <$email>",
    "X-Mailer: PHP/" . phpversion(),
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8"
];

// Send email
$mail_sent = mail($to_email, $subject, $email_body, implode("\r\n", $headers));

// Return response
if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We will get back to you within 24 hours.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again or contact us directly at ' . $to_email
    ]);
}
?>
