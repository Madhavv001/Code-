from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from database.models import User, Message

app = FastAPI()

class UserCreate(BaseModel):
    username: str
    email: str

@app.post("/api/users")
async def create_user(user: UserCreate):
    # Create user in database
    return {"message": "User created", "user": user}

@app.get("/api/messages")
async def get_messages():
    # Fetch messages from database
    return {"messages": []}
