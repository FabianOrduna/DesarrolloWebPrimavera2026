from fastapi import FastAPI
app = FastAPI()

diccionario_usuarios = {
    1: { "nombre": "Fabián"},
    2: { "nombre": "Samuel"}
}

@app.post("/v1/usuario")
def create_user(usuario_nombre: str):
    # Calculo el nuevo id del usuario que voy a insertar
    id_usuario = len(diccionario_usuarios) + 1

    # Creo el nuevo usuario
    nuevo_usuario = { "nombre": usuario_nombre }

    # Inserto el nuevo usuario en el diccionario de usuarios
    diccionario_usuarios[id_usuario] = nuevo_usuario

    #Regreso el nuevo usuario que acabo de insertar
    return diccionario_usuarios[id_usuario]

@app.get("/v1/usuarios")
def read_users():
    # regresamos el diccionario de usuarios
    return diccionario_usuarios

@app.get("/v1/usuario/{id_usuario}")
def read_user(id_usuario: int):
    
    # Trato de obtener el usuario del diccionario de usuarios usando el id_usuario que me pasaron
    usuario = diccionario_usuarios.get(id_usuario)

    # Si el usuario no existe, regreso un error
    if usuario == None:
        return {"error": "Usuario no encontrado"}
    
    # Si el usuario existe, regreso el usuario
    return usuario