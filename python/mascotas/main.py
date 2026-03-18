from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = ["*"] # Lista de orígenes permitidos para CORS, en este caso se permite cualquier origen. En un entorno de producción, es indispensable especificar los orígenes permitidos para mejorar la seguridad.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Bienvenido a la API de mascotas!"}