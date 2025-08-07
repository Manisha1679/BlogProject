# 📝 BlogProject (with Appwrite Backend)

A full-stack blog application with a modern frontend **React** and a secure backend powered by **Appwrite**. This project allows users to create, store, and manage blog posts via a real-time database and serverless functions.


## 🔍 Overview

This blog platform features:

- ✍️ Add blog posts with title and content
- 📋 View posts from Appwrite backend
- 🔄 Real-time sync with Appwrite database
- 🔐 Secure API calls using Appwrite's SDK
- 💻 Fully client-side frontend with backend as a service


## ⚙️ Tech Stack

| Layer       | Tech Used                   |
|-------------|-----------------------------|
| Frontend    | React,Tailwind  css         |
| Backend     | Appwrite Cloud              |
| API/Auth    | Appwrite SDK                |


---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js and npm (for local dev)
- [Appwrite Cloud](https://cloud.appwrite.io) or [Self-Hosted Appwrite](https://appwrite.io/docs/installation)


## 🧪 Setup Appwrite

1. **Create a Project**
   - Go to [Appwrite Console](https://cloud.appwrite.io)
   - Click **Create Project** (e.g., `BlogProject`)

2. **Create a Database**
   - Add a collection (e.g., `posts`)
   - Define attributes:
     - `title` (string, required)
     - `content` (string, required)

3. **Create an API Key (Optional)**
   - Or use anonymous session/login methods depending on your setup

4. **Enable CORS**
   - Go to your project → Settings → Platform → Add your local/hosted frontend origin (e.g., `http://localhost:5500`)


## 🛠️ Setup Frontend

1. **Clone the repo**

   git clone https://github.com/Manisha1679/BlogProject.git<br>
   cd BlogProject/blog


2. **Update appwrite config in index.js**

  const client = new Appwrite.Client()<br>
                              .setEndpoint('https://cloud.appwrite.io/v1') // or your local endpoint<br>
                              .setProject('YOUR_PROJECT_ID'); // replace with your Appwrite project ID
    
3. **Run locally**<br>
  cd BlogProject<br>
  npm install<br>
  npm run dev<br>




