// Contact Form API Handler
// This handles form submissions with a fallback for development

interface FormData {
  name: string;
  email: string;
  message: string;
  formType: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  errors?: string[];
}

// Mock API for development environment (simulates PHP backend)
const mockSubmit = async (data: FormData): Promise<ApiResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Basic validation (matching PHP backend)
  const errors: string[] = [];

  if (!data.name || data.name.length < 2) {
    errors.push("Name must be at least 2 characters long.");
  }
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Please provide a valid email address.");
  }
  if (!data.message || data.message.length < 3) {
    errors.push("Message must be at least 3 characters long.");
  }

  if (errors.length > 0) {
    return {
      success: false,
      message: "Validation failed.",
      errors,
    };
  }

  // Simulate successful submission
  console.log("📧 [DEV MODE] Form submission:", {
    to: "info@foxandhoundslagos.com",
    subject: `[Fox & Hounds Lagos] ${data.formType} Form Submission`,
    from: data.email,
    name: data.name,
    message: data.message,
    formType: data.formType,
  });

  return {
    success: true,
    message:
      "Thank you for your message! We will get back to you within 24 hours.",
  };
};

// Main submit function that works in both dev and production
export const submitContactForm = async (
  data: FormData,
): Promise<ApiResponse> => {
  // In production (deployed to cPanel), use the real PHP backend
  // In development, use the mock
  const isProduction = import.meta.env.PROD;

  if (isProduction) {
    // Production: Call the PHP backend
    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Contact form error:", error);
      throw error;
    }
  } else {
    // Development: Use mock API
    console.log("🔧 Development mode - using mock API");
    return mockSubmit(data);
  }
};
