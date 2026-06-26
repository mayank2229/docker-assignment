# Flask + Node.js Docker Project

A full-stack application with Node.js (Express) frontend and Flask backend, connected via Docker Compose.

## Project Structure

```
flask-node-project/
├── frontend/
│   ├── views/
│   │   └── index.ejs
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yaml
├── .gitignore
└── README.md
```

## How to Run

### Using Docker Compose
```bash
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

### Push Images to Docker Hub
```bash
docker build -t yourdockerhubusername/flask-backend ./backend
docker build -t yourdockerhubusername/node-frontend ./frontend
docker push yourdockerhubusername/flask-backend
docker push yourdockerhubusername/node-frontend
```
