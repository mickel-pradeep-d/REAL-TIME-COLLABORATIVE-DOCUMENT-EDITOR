# REAL-TIME COLLABORATIVE DOCUMENT EDITOR

**COMPANY** : CODTECH IT SOLUTIONS

**NAME** : MICKEL PRADEEP D

**INTERN ID** : CT12NIW

**DOMAIN** : FULL STACK WEB DEVELOPMENT

**DURATION** : 8 WEEKS

**MENTOR** : NEELA SANTOSH KUMAR

### PROJECT DESCRIPTION

**TITLE : Real-time Collaborative Document Editor**

This is a real-time collaborative document editor built using **React**, **Node.js**, **Express.js**, **Socket.io**, and **MongoDB**. The application allows multiple users to edit the same document simultaneously with live synchronization and rich text formatting.


## ✨ Features

- Real-time text editing across multiple users.
- Rich text formatting using React Quill editor.
- Automatic saving of document content.
- Unique document IDs for shared collaboration.
- Clean, full-screen, responsive interface.
- Socket.io-based live communication between users.


## 📖 Project Overview

This editor enables multiple users to collaborate on the same document in real time. Each document is uniquely identified by a document ID. When users access the same document ID, they can see each other's changes live.

React Quill provides a rich text interface where users can apply headers, bold/italic styling, lists, links, images, and more. All changes are stored in MongoDB for persistence.


## 🧰 Technologies Used

- **Frontend**: React.js, React-Quill, Socket.io-client  
- **Backend**: Node.js, Express.js, Socket.io  
- **Database**: MongoDB (via Mongoose)  
- **Real-time Communication**: WebSockets via Socket.io


## 🧠 How It Works?

- User opens the app and is redirected to a unique document URL.
- All users with the same document ID see and edit the same content.
- Text is synced across clients instantly using Socket.io.
- The server saves updates to MongoDB regularly.
- Rich text features are powered by React Quill.


## 🚀 Future Enhancements

- Add user presence indicators (who's online/editing).
- Implement document version history.
- Support for exporting documents as PDF or Word.
- Authentication and private document access.
- Chatbox or comments inside documents.


## **Output :**

**Working demo video**

![Image](https://github.com/user-attachments/assets/4986f662-1a1c-4ef2-ab2b-59396da336d7)

![Image](https://github.com/user-attachments/assets/df56f6ab-d53f-4f77-ac6f-b0d0392fea33)
