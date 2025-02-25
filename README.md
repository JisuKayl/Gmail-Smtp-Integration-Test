# 📧 Gmail SMTP Integration

This project implements email messaging using **Gmail SMTP**, built with **React** (frontend) and **Express** (backend). The backend uses **Nodemailer** to send emails, while the frontend utilizes **Axios** to communicate with the backend.

---

## 🚀 Features
- ✅ **Send emails using Gmail SMTP**
- ✅ **Simple UI for email input and submission**
- ✅ **Backend API with Express.js and Nodemailer**
- ✅ **Frontend with React and Axios for sending email requests**

---

## 📡 API Endpoint

### **Send Email**
- **URL:** `/api/send-email`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "to": "recipient@example.com",
    "subject": "Test Email",
    "text": "This is a test email from the system."
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Email sent successfully"
  }
  ```

---

## 📜 License
This project is open-source and available for modification and improvement.

![image](https://github.com/user-attachments/assets/8a4c0dd7-2938-4154-a17a-9bd9dc6dab6b)
![image](https://github.com/user-attachments/assets/dd35ba52-e683-4ad2-8c37-94ca9513f9be)
