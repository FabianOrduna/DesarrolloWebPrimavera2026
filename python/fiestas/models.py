from pydantic import BaseModel

class FiestaDTO(BaseModel):
    nombre: str
    fecha: str
    lugar: str

class InvitadoDTO(BaseModel):
    nombre: str
    id_fiesta: str