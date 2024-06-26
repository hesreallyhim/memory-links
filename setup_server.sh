#!/bin/bash

# Create main directory structure
mkdir -p server/app/{api,core,services,models}
mkdir -p server/tests
mkdir -p server/venv

# Create files
touch server/app/__init__.py
touch server/app/main.py
touch server/app/api/__init__.py
touch server/app/api/routes.py
touch server/app/core/__init__.py
touch server/app/core/config.py
touch server/app/services/__init__.py
touch server/app/services/openai_service.py
touch server/app/models/__init__.py
touch server/app/models/pydantic_models.py
touch server/tests/__init__.py
touch server/tests/test_main.py
touch server/tests/test_openai_service.py
touch server/.env
touch server/.gitignore
touch server/requirements.txt
touch server/requirements.dev.txt
touch server/setup.py
touch server/pyproject.toml
touch server/Dockerfile
touch server/README.md
touch server/run.sh

# Write content to files
cat << EOF > server/app/main.py
from fastapi import FastAPI
from app.api import routes

app = FastAPI()

app.include_router(routes.router)

@app.get("/")
async def root():
    return {"message": "Welcome to the Memory-Links API"}
EOF

cat << EOF > server/app/api/routes.py
from fastapi import APIRouter
from app.services import openai_service
from app.models import pydantic_models

router = APIRouter()

@router.post("/generate-links")
async def generate_links(request: pydantic_models.LinkRequest):
    links = await openai_service.generate_mnemonic_links(request.items)
    return {"links": links}
EOF

cat << EOF > server/app/services/openai_service.py
import openai
from app.core.config import settings

openai.api_key = settings.OPENAI_API_KEY

async def generate_mnemonic_links(items: list[str]) -> list[str]:
    prompt = f"Generate mnemonic links for these items: {', '.join(items)}"
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=100
    )
    return response.choices[0].text.strip().split('\n')
EOF

cat << EOF > server/app/core/config.py
from pydantic import BaseSettings

class Settings(BaseSettings):
    OPENAI_API_KEY: str

    class Config:
        env_file = ".env"

settings = Settings()
EOF

cat << EOF > server/app/models/pydantic_models.py
from pydantic import BaseModel

class LinkRequest(BaseModel):
    items: list[str]
EOF

cat << EOF > server/.gitignore
venv/
__pycache__/
*.pyc
.env
.pytest_cache/
EOF

cat << EOF > server/requirements.txt
fastapi==0.68.0
uvicorn==0.15.0
pydantic==1.8.2
python-dotenv==0.19.0
openai==0.27.0
EOF

cat << EOF > server/requirements.dev.txt
-r requirements.txt
pytest==6.2.5
black==21.9b0
flake8==3.9.2
EOF

cat << EOF > server/setup.py
from setuptools import setup, find_packages

setup(
    name="memory-links-server",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "fastapi==0.68.0",
        "uvicorn==0.15.0",
        "pydantic==1.8.2",
        "python-dotenv==0.19.0",
        "openai==0.27.0",
    ],
    extras_require={
        "dev": [
            "pytest==6.2.5",
            "black==21.9b0",
            "flake8==3.9.2",
        ],
    },
)
EOF

cat << EOF > server/pyproject.toml
[tool.black]
line-length = 88
target-version = ['py38']
include = '\.pyi?$'
extend-exclude = '''
/(
  # directories
  \.eggs
  | \.git
  | \.hg
  | \.mypy_cache
  | \.tox
  | \.venv
  | build
  | dist
)/
'''

[tool.pytest.ini_options]
minversion = "6.0"
addopts = "-ra -q"
testpaths = [
    "tests",
]
EOF

cat << EOF > server/run.sh
#!/bin/bash

# Activate virtual environment
source venv/bin/activate

# Run the FastAPI server
uvicorn app.main:app --reload
EOF

# Make run.sh executable
chmod +x server/run.sh

echo "Server directory structure and files created successfully!"
