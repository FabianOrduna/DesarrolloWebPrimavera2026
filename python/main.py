from fastapi import FastAPI

app = FastAPI()

# Comentario 
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/v1/hola-mundo")
def hola_mundo():
    return {"Hola": "Mundo"}


@app.post("/v1/hola-mundo")
def hola_mundo_post():
    return {"Hola": "Mundo POST"}


@app.get("/v1/items/{item_id}")
def read_item(item_id: int, q: str | None = None):
    return {"item_id": item_id, "q": q}


@app.get("/v1/usuario/{id_usuario}")
def read_usuario(id_usuario: int):

    personas = {
        1: { "nombre": "Fabián"},
        2: { "nombre": "Samuel"},
    }
    
    if personas.get(id_usuario) == None:
        return {"error": "Usuario no encontrado"}
    
    return personas[id_usuario]


