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
