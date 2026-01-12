from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path

app = FastAPI()

# Allow frontend (React) to fetch
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load sample events
DATA_FILE = Path(__file__).parent.parent / "data" / "events.json"
with open(DATA_FILE, "r") as f:
    events = json.load(f)

@app.get("/")
def root():
    return {"message": "Agentic Event Finder API running"}

@app.get("/events")
def get_events():
    return events
