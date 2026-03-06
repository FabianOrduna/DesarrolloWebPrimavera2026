from pydantic import BaseModel

# Clase DTO (Data Transfer Object) para representar un
# objeto de Curso para cuando se van a mandar datos a 
# un endpoint.
class CursoDTO(BaseModel):
    nombre: str