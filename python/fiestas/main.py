from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utils import generar_guid
from models import FiestaDTO, InvitadoDTO

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

diccionario_fiestas = {}
arreglo_invitados = []

# Endpoint para crear una fiesta, y asignarle un uuid único.
@app.post("/fiestas")
def crear_fiesta(fiesta: FiestaDTO):
    id_fiesta = generar_guid()
    diccionario_fiestas[id_fiesta] = {"id": id_fiesta, "nombre": fiesta.nombre, "fecha": fiesta.fecha, "lugar": fiesta.lugar, "activo": True}
    return diccionario_fiestas[id_fiesta]

# Endpoint para leer una fiesta por su id.
@app.get("/fiestas/{id_fiesta}")
def leer_fiesta(id_fiesta: str):
    return diccionario_fiestas[id_fiesta]

# Endpoint para cancelar una fiesta por su id.
@app.post("/fiestas/{id_fiesta}/cancelar")
def cancelar_fiesta(id_fiesta: str):
    diccionario_fiestas[id_fiesta]["activo"] = False
    return diccionario_fiestas[id_fiesta]

# Endpoint para listar todas las fiestas.
# query param para filtrar por fiestas activas o no activas.
    # tipo -> activa, cancelada o vacío (para todas)
@app.get("/fiestas")
def listar_fiestas(tipo: str = ""):
    fiestas_filtradas = []

    todasLasFiestas = diccionario_fiestas.values()

    if tipo == "activas":
        for fiesta in todasLasFiestas:
            if fiesta["activo"] == True:
                fiestas_filtradas.append(fiesta)
    elif tipo == "canceladas":
        for fiesta in todasLasFiestas:
            if fiesta["activo"] == False:
                fiestas_filtradas.append(fiesta)
    else:
        fiestas_filtradas = todasLasFiestas
    
    return list(fiestas_filtradas)



# Endpoint para agregar un invitado a una fiesta.
@app.post("/invitado")
def agregar_invitado(invitado: InvitadoDTO):
    invitado_a_fiesta = { "id": generar_guid(), "nombre": invitado.nombre, "id_fiesta": invitado.id_fiesta}
    # añadir el invitado al arreglo de invitados
    arreglo_invitados.append(invitado_a_fiesta)
    return invitado

# Endpoint para listar los invitados de una fiesta.
@app.get("/fiestas/{id_fiesta}/invitados")
def listar_invitados(id_fiesta: str):
    invitados_de_fiesta = []
    for invitado in arreglo_invitados:
        if invitado["id_fiesta"] == id_fiesta:
            invitados_de_fiesta.append(invitado)
    return invitados_de_fiesta
