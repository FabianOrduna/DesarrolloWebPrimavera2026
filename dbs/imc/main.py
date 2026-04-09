# API fon fastapi para calcular el IMC (Índice de Masa Corporal)
from fastapi import FastAPI
from models import Persona

app = FastAPI()

# Se guarda en un diccionario de informacion
personas = {} # diccionario con id autogenerado, nombre, peso, talla, imc


@app.post("/calculate_imc/")
def calculate_imc(person: Persona):
    # Genetar un ID autogenerado para la persona
    id_persona = len(personas) + 1
    # Calcular el IMC
    imc = person.peso / (person.talla ** 2)
    # Guardar la información en el diccionario
    personas[id_persona] = {
        "id": id_persona,
        "nombre": person.nombre,
        "peso": person.peso,
        "talla": person.talla,
        "imc": imc
    }

    return personas[id_persona]

@app.get("/get_persona/{id_persona}")
def get_persona(id_persona: int):
    # Obtener la información de una persona por su ID
    if id_persona in personas:
        return personas[id_persona]
    else:
        return {"error": "Persona no encontrada"}

@app.get("/get_all_personas/")
def get_all_personas():
    # Obtener la información de todas las personas
    return list(personas.values())

@app.put("/update_persona/{id_persona}")
def update_persona(id_persona: int, person: Persona):
    # Actualizar la información de una persona por su ID
    if id_persona in personas:
        imc = person.peso / (person.talla ** 2)
        personas[id_persona] = {
            "id": id_persona,
            "nombre": person.nombre,
            "peso": person.peso,
            "talla": person.talla,
            "imc": imc
        }
        return personas[id_persona]
    else:
        return {"error": "Persona no encontrada"}
    
@app.delete("/delete_persona/{id_persona}")
def delete_persona(id_persona: int):
    # Eliminar la información de una persona por su ID
    if id_persona in personas:
        del personas[id_persona]
        return {"message": "Persona eliminada"}
    else:
        return {"error": "Persona no encontrada"}