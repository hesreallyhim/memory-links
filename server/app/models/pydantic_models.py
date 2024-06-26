from pydantic import BaseModel

class LinkRequest(BaseModel):
    items: list[str]
