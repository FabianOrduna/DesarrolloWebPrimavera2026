from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, Field
from uuid import uuid4, UUID

app = FastAPI()

# ------------------------------
# Modelos
# ------------------------------

class SolicitudAdopcion(BaseModel):
    nombrePersona: str
    mascotaDeseada: str
    motivo: str

class SolicitudPatch(BaseModel):
    mascotaDeseada: str | None = None
    motivo: str | None = None

class EstadoPatch(BaseModel):
    estado: str = Field(..., pattern="^(pendiente|aceptada|rechazada)$")

class SolicitudRespuesta(BaseModel):
    id: UUID
    nombrePersona: str
    mascotaDeseada: str
    motivo: str
    estado: str


# ------------------------------
# "Base de datos" en memoria
# ------------------------------

solicitudes: dict[UUID, dict] = {}


# ------------------------------
# POST - Crear solicitud
# ------------------------------

@app.post(
    "/solicitudes",
    response_model=SolicitudRespuesta,
    status_code=status.HTTP_201_CREATED
)
async def crear_solicitud(solicitud: SolicitudAdopcion):
    nuevo_id = uuid4()

    nueva = {
        "id": nuevo_id,
        "nombrePersona": solicitud.nombrePersona,
        "mascotaDeseada": solicitud.mascotaDeseada,
        "motivo": solicitud.motivo,
        "estado": "pendiente"
    }

    solicitudes[nuevo_id] = nueva
    return nueva


# ------------------------------
# GET - Obtener todas (con filtro opcional por nombre)
# ------------------------------

@app.get("/solicitudes", response_model=list[SolicitudRespuesta])
async def obtener_todas(nombre: str | None = None):
    resultados = list(solicitudes.values())

    if nombre:
        nombre_lower = nombre.lower()
        resultados = [
            s for s in resultados
            if nombre_lower in s["nombrePersona"].lower()
        ]

    return resultados


# ------------------------------
# GET - Obtener por ID
# ------------------------------

@app.get("/solicitudes/{id}", response_model=SolicitudRespuesta)
async def obtener_por_id(id: UUID):
    if id not in solicitudes:
        raise HTTPException(status_code=404, detail="Solicitud no encontrada")
    return solicitudes[id]


# ------------------------------
# PATCH - Actualizar mascotaDeseada o motivo
# ------------------------------

@app.patch("/solicitudes/{id}", response_model=SolicitudRespuesta)
async def actualizar_parcial(id: UUID, cambios: SolicitudPatch):
    if id not in solicitudes:
        raise HTTPException(status_code=404, detail="Solicitud no encontrada")

    solicitud = solicitudes[id]

    if cambios.mascotaDeseada is not None:
        solicitud["mascotaDeseada"] = cambios.mascotaDeseada

    if cambios.motivo is not None:
        solicitud["motivo"] = cambios.motivo

    return solicitud


# ------------------------------
# PATCH - Cambiar estado (pendiente, aceptada, rechazada)
# ------------------------------

@app.patch("/solicitudes/{id}/estado", response_model=SolicitudRespuesta)
async def cambiar_estado(id: UUID, cambio: EstadoPatch):
    if id not in solicitudes:
        raise HTTPException(status_code=404, detail="Solicitud no encontrada")

    solicitud = solicitudes[id]
    solicitud["estado"] = cambio.estado

    return solicitud


# ------------------------------
# DELETE - Eliminar solicitud
# ------------------------------

@app.delete("/solicitudes/{id}", status_code=status.HTTP_204_NO_CONTENT)
async def eliminar_solicitud(id: UUID):
    if id not in solicitudes:
        raise HTTPException(status_code=404, detail="Solicitud no encontrada")

    del solicitudes[id]
    return None
