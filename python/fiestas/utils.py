import uuid

# https://docs.python.org/3.14/library/uuid.html
#
# Un UUID es un identificador único universal de 128 bits que permite distinguir recursos sin necesidad de
# coordinación entre sistemas. Su propósito es asegurar unicidad global en contextos distribuidos, y Python
# lo implementa siguiendo el estándar RFC 9562, que define versiones como la 1 (tiempo y MAC), 4 (aleatoria)
# o 7 (basada en timestamp), entre otras .Su estructura se representa como 32 dígitos hexadecimales divididos
# en el patrón 8-4-4-4-12, por ejemplo 123e4567-e89b-12d3-a456-426614174000. Aunque se vea como texto,
# internamente es un número entero de 128 bits. Algunos bits indican el variant (diseño interno) y el version,
# que determina el método de generación. Python permite construir un UUID desde hex, bytes, bytes en
# little-endian, campos individuales o un entero completo de 128 bits, siempre siguiendo las reglas del
# módulo uuid
def generar_guid():
    return str(uuid.uuid4())

