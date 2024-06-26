from fastapi import APIRouter
from app.services import openai_service
from app.models import pydantic_models

router = APIRouter()

@router.post("/generate-links")
async def generate_links(request: pydantic_models.LinkRequest):
    links = await openai_service.generate_mnemonic_links(request.items)
    return {"links": links}
