from pydantic import BaseModel

class Persona(BaseModel):
    nombre: str  # Nombre de la persona
    peso: float  # Peso en kilogramos
    talla: float  # Talla (altura) en metros