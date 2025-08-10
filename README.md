# Email Validator

A simple web application that validates an email address using the ZeroBounce API. The project demonstrates how to work with REST APIs in a client-side JavaScript environment while using Tailwind CSS for styling.

## Overview

This Email Validator app provides:
- A user-friendly interface built with HTML and Tailwind CSS.
- Email validation via the ZeroBounce API.
- Dynamic UI updates to inform the user if their email is valid or not.

## Features

- **Responsive Design:** Built using Tailwind CSS with a modern, responsive layout.
- **API Integration:** Validates email addresses using the ZeroBounce API.
- **UI Feedback:** Displays a green confirmation message for valid emails and a red error message for invalid emails or API errors.
- **Vanilla JavaScript:** Simple and clear API calls using the Fetch API.

## Setup

1. **Clone the Repository:**

    ```bash
    git clone https://your-repository-url.git
    cd email-validator
    ```

2. **Configure Your API Key:**

    Open the file `script.js` and replace the placeholder API key:

    ```javascript
    const apiKey = "REPLACE_WITH_API_KEY"  // Replace this with your actual ZeroBounce API key.
    ```

3. **Run the Application:**

    Open `index.html` in your favorite browser. You can simply double-click the file or use a live server extension in your IDE.

## Usage

1. Enter an email address in the input field.
2. Click on the **Validate** button.
3. The application will send a request to the ZeroBounce API, and the interface will update to show whether the email is valid or invalid.

## Dependencies

- **[Tailwind CSS](https://tailwindcss.com):** Included via CDN for styling.
- **[Font Awesome](https://fontawesome.com):** Used for displaying the envelope icon.
- **[ZeroBounce API](https://www.zerobounce.net):** Provides email validation services. You need to sign up to obtain an API key.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Thanks to ZeroBounce for their email validation API.
- Thanks to the maintainers of Tailwind CSS and Font Awesome for their amazing tools.
