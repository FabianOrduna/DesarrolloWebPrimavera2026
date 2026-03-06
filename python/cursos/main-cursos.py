from fastapi import FastAPI
from utils import generar_guid
from models import CursoDTO

app = FastAPI()


# Diccionario para almacenar los cursos en memoria,
# con el id del curso como clave y el objeto con el
# ID y el nombre del curso como valor.
#
# Ejemplo de cómo se vería el diccionario de cursos en memoria:
#
# [ 
#   "3b060499-60f7-45f2-96b9-87a59e0fcdb6": {
#     "id": "3b060499-60f7-45f2-96b9-87a59e0fcdb6",
#     "nombre": "Introducción a Python"
#   },
#   "d9c8e5a1-2b3f-4c6a-9e7d-8f1a2b3c4d5e": {
#     "id": "d9c8e5a1-2b3f-4c6a-9e7d-8f1a2b3c4d5e",
#     "nombre": "Introducción a JavaScript"
#   }
# ]
#
cursos_en_memoria = {} 

# Ahora el de alumnos con un diccionario igual, pero ahora va a tener un arreglo
# de cursos inscritos, por ejemplo:
#
# alumnos_en_memoria = {
#   "a1b2c3d4-e5f6-7g89-0a1b-2c3d4e5f6g7": {
#     "id": "a1b2c3d4-e5f6-7g89-0a1b-2c3d4e5f6g7",
#     "nombre": "Fabián",
#     "cursos_inscritos": [
#       "3b060499-60f7-45f2-96b9-87a59e0fcdb6",
#       "d9c8e5a1-2b3f-4c6a-9e7d-8f1a2b3c4d5e"
#     ]
#   },
#   "h1i2j3k4-l5m6-7n89-0o1p-2q3r4s5t6u7": {
#     "id": "h1i2j3k4-l5m6-7n89-0o1p-2q3r4s5t6u7",
#     "nombre": "Samuel",
#     "cursos_inscritos": [
#       "3b060499-60f7-45f2-96b9-87a59e0fcdb6"
#     ]
#   }
# }

###########################################
#                 Cursos                 #
###########################################

@app.post("/v1/curso")
def crear_curso(curso: CursoDTO):
    id_generado = generar_guid()
    cursos_en_memoria[id_generado] = {"id": id_generado, "nombre": curso.nombre}
    return cursos_en_memoria[id_generado]


###########################################
#                 Alumnos                 #
###########################################