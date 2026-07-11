export const emailTemplate = (name, email, subject, message) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Contact Form Submission</title>

        <style>
          body {
            margin: 0;
            padding: 20px;
            background: #f4f4f4;
            font-family: Arial, sans-serif;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          h2 {
            color: #333;
            margin-bottom: 20px;
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
          }

          .field {
            margin-bottom: 16px;
          }

          .label {
            font-weight: bold;
            color: #555;
            display: block;
            margin-bottom: 5px;
          }

          .value {
            color: #333;
            background: #f8f9fa;
            padding: 10px;
            border-radius: 5px;
            word-wrap: break-word;
          }

          .message {
            white-space: pre-wrap;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h2>New Contact Form Submission</h2>

          <div class="field">
            <span class="label">Name</span>
            <div class="value">${name}</div>
          </div>

          <div class="field">
            <span class="label">Email</span>
            <div class="value">${email}</div>
          </div>

          <div class="field">
            <span class="label">Subject</span>
            <div class="value">${subject}</div>
          </div>

          <div class="field">
            <span class="label">Message</span>
            <div class="value message">${message}</div>
          </div>
        </div>
      </body>
    </html>
  `;
};