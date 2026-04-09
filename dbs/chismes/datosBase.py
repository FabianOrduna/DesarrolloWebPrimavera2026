import sqlite3

def crear_base_datos():
    conn = sqlite3.connect('chismes.db')
    cursor = conn.cursor()
    
    # IF NOT EXISTS
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS chismes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            quien_dijo TEXT NOT NULL,
            sobre_quien TEXT NOT NULL,
            chisme TEXT NOT NULL,
            fecha DATE NOT NULL,
            monto_silencio REAL DEFAULT 0,
            es_real BOOLEAN DEFAULT 0,
            nivel_gravedad INTEGER CHECK(nivel_gravedad BETWEEN 1 AND 5),
            categoria TEXT,
            lugar TEXT,
            testigos INTEGER DEFAULT 0
        );
    ''')
    
    conn.commit()
    conn.close()

def cargar_chismes_iniciales():
    chismes_iniciales = [
        ('Ana', 'Carlos', 'Carlos fue visto con otra persona', '2024-06-01', 100.0, True, 3, 'Infidelidad', 'Parque Central', 2),
        ('Luis', 'María', 'María está planeando mudarse a otra ciudad', '2024-06-02', 50.0, False, 2, 'Mudanza', 'Café del Centro', 1),
        ('Sofía', 'Jorge', 'Jorge perdió su trabajo recientemente', '2024-06-03', 0.0, True, 4, 'Trabajo', 'Oficina de Jorge', 3)
    ]
    
    conn = sqlite3.connect('chismes.db')
    cursor = conn.cursor()
    
    cursor.executemany('''
        INSERT INTO chismes (quien_dijo, sobre_quien, chisme, fecha, monto_silencio, es_real, nivel_gravedad, categoria, lugar, testigos)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    ''', chismes_iniciales)
    
    conn.commit()
    conn.close()

def leer_chismes():
    conn = sqlite3.connect('chismes.db')
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM chismes')
    chismes = cursor.fetchall()
    
    conn.close()
    return chismes

def agregar_chisme(quien_dijo, sobre_quien, chisme, fecha, monto_silencio=0.0, es_real=False, nivel_gravedad=1, categoria=None, lugar=None, testigos=0):
    conn = sqlite3.connect('chismes.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO chismes (quien_dijo, sobre_quien, chisme, fecha, monto_silencio, es_real, nivel_gravedad, categoria, lugar, testigos)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    ''', (quien_dijo, sobre_quien, chisme, fecha, monto_silencio, es_real, nivel_gravedad, categoria, lugar, testigos))
    
    conn.commit()
    conn.close()


# Crear la base de datos al importar el módulo
crear_base_datos()

# Leer y mostrar los chismes después de cargar los iniciales
chismes = leer_chismes()
print("Tabla al iniciar el programa:")

for chisme in chismes:
    print(chisme)

# Cargar chismes iniciales al importar el módulo
# cargar_chismes_iniciales()

# Leer chismes después de cargar los iniciales
# chismes = leer_chismes()
# print("\nTabla después de cargar los chismes iniciales:")

# for chisme in chismes:
#     print(chisme)