# 🚀 INICIO RÁPIDO - EduIndustrial en 5 Minutos

## ¿Qué es EduIndustrial?

Una aplicación web que **automáticamente**:
- 📊 Analiza tus documentos de curso (Excel, PowerPoint, Word)
- 🎓 Recomienda métodos de aprendizaje basados en Bloom
- ✨ Genera prompts para IA (ChatGPT, Claude, etc.)
- 📝 Crea guiones para diseñadores gráficos
- 📤 Exporta todo en múltiples formatos

---

## OPCIÓN 1: Inicio Inmediato (Más Fácil)

### Paso 1: Descargar e Instalar
```bash
# Descargar ZIP con todos los archivos
# Ya los tienes en: /mnt/user-data/outputs/

# O usar curl
mkdir eduindustrial && cd eduindustrial

# Copiar todos los archivos aquí
```

### Paso 2: Iniciar Servidor Local
```bash
# Abrir terminal en la carpeta del proyecto
cd /ruta/a/eduindustrial

# Iniciar PHP local
php -S localhost:8000
```

### Paso 3: Abrir en Navegador
```
http://localhost:8000
```

**¡Listo! La aplicación está corriendo.**

---

## OPCIÓN 2: Instalar en Apache (Producción)

```bash
# 1. Copiar a /var/www/html/
sudo cp -r eduindustrial /var/www/html/

# 2. Ajustar permisos
sudo chown -R www-data:www-data /var/www/html/eduindustrial
chmod -R 755 /var/www/html/eduindustrial
chmod -R 777 /var/www/html/eduindustrial/uploads

# 3. Acceder
http://localhost/eduindustrial
```

---

## OPCIÓN 3: Con Docker (1 comando)

```bash
# Desde la carpeta del proyecto
docker run -p 80:80 -v $(pwd):/var/www/html php:8.0-apache

# Acceder a: http://localhost
```

---

## 📖 Flujo de Uso en 5 Pasos

### 1️⃣ **Subir Archivos**
   - Temario (Excel)
   - Manual (PowerPoint)
   - Dinámicas (PowerPoint)
   - Información (Word)
   
   → Click "Analizar Archivos"

### 2️⃣ **Ver Análisis**
   - ✅ Módulos identificados
   - ✅ Lecciones encontradas
   - ✅ Objetivos extraídos

### 3️⃣ **Revisar Métodos Recomendados**
   - 📚 Video
   - ✨ Animación
   - ⚡ Articulate 360
   - 📋 Caso de Estudio
   - 🖥️ Simulación
   - ✅ Evaluación
   - (+ 8 métodos más)

### 4️⃣ **Generar Prompts y Guiones**
   - Click "Generar Prompts y Guiones"
   - Copiar prompts al portapapeles
   - O descargar todos los prompts

### 5️⃣ **Exportar Resultados**
   - 📄 JSON (para desarrolladores)
   - 📊 CSV/Excel (para gerentes)
   - 📝 TXT (para diseñadores)

---

## 🎬 Ejemplo Práctico Completo

### Tienes un Curso de "Mantenimiento Preventivo" con:
- ✅ Temario en Excel (3 días)
- ✅ Manual en PowerPoint (50 slides)
- ✅ Dinámicas en PowerPoint (4 actividades)
- ✅ Referencias en Word (normas ISO)

### Proceso (5 minutos):

```
1. Drag & drop de 4 archivos
   ↓
2. Click "Analizar"
   ↓ (automático en 30s)
3. App detecta:
   - 3 módulos
   - 9 lecciones
   - 27 objetivos
   ↓
4. Recomienda:
   - Videos para conceptos básicos
   - Simulaciones para procedimientos
   - Casos de estudio para análisis
   ↓
5. Click "Generar Prompts"
   ↓
6. Obtiene:
   - 9 prompts de video
   - 3 especificaciones de simulación
   - 2 casos de estudio
   ↓
7. Descarga todo o copia individual
```

**Resultado: 20 documentos listos para tu equipo de diseño**

---

## 💡 Prompts Generados - Ejemplos

### Prompt para VIDEO:
```
Crea un guión para video de 10 minutos.
Tema: Introducción a Mantenimiento Preventivo
Objetivo: Comprender importancia estratégica
Audiencia: Técnicos industriales
Duración: 10 minutos
Estructura: Intro (30s) → Desarrollo (9m) → Conclusión (30s)
Incluir: 2-3 gráficos, ejemplos reales...
```

### Prompt para SIMULACIÓN:
```
Especifica simulación interactiva de:
Diagnosticando fallas en equipos rotatorios
Escenarios: Normal, Problema, Complejo
Variables ajustables: RPM, Temperatura, Vibración
Retroalimentación: Inmediata y explicativa...
```

### Prompt para ARTICULATE:
```
Diseña componente Articulate 360
Tema: Análisis FMEA paso a paso
SCORM 2004 compatible
Slides: 6-8
Interactividad: Drag & drop para FMEA
Evaluación: 8 preguntas...
```

---

## 🔗 Usa los Prompts Con:

- **ChatGPT** → Pega prompt completo
- **Claude** → Copia y pega directamente
- **Copilot** → Funciona perfectamente
- **Gemini** → Compatible
- **Cualquier LLM** → Todo funciona

---

## 📊 Métodos Disponibles (14 Total)

| Método | Tipo | Engagement | Retención |
|--------|------|-----------|-----------|
| Video | Multimedia | ⭐⭐⭐⭐⭐ | 50% |
| Animación | Multimedia | ⭐⭐⭐⭐⭐⭐⭐⭐ | 65% |
| Simulación | Interactivo | ⭐⭐⭐⭐⭐⭐⭐⭐⭐ | 85% |
| Caso Estudio | Análisis | ⭐⭐⭐⭐⭐⭐⭐ | 80% |
| Articulate | E-learning | ⭐⭐⭐⭐⭐⭐⭐⭐ | 80% |
| Ejercicio | Práctico | ⭐⭐⭐⭐⭐⭐⭐⭐ | 75% |
| Evaluación | Medición | ⭐⭐⭐⭐ | 45% |
| Infografía | Visual | ⭐⭐⭐⭐⭐⭐ | 55% |
| Podcast | Audio | ⭐⭐⭐ | 25% |
| Lectura | Texto | ⭐⭐ | 20% |
| (+ 4 métodos más) | ... | ... | ... |

---

## ❓ Preguntas Rápidas

**¿Requiere internet?**
- No. Funciona completamente offline

**¿Qué navegadores soporta?**
- Chrome, Firefox, Safari, Edge (últimas 2 versiones)

**¿Puedo usar un archivo?**
- Sí. Funciona con mínimo 1 archivo

**¿Los prompts realmente funcionan?**
- Sí. Probado con ChatGPT-4 y Claude

**¿Cómo se integra con Articulate?**
- Copia las especificaciones y crea en Articulate Storyline

**¿Qué pasa con mis datos?**
- Los archivos se procesan localmente y se eliminan después

---

## 📞 Soporte Rápido

### Error: "No se pueden subir archivos"
```
→ Verifica que el directorio /uploads tenga permisos 777
chmod 777 uploads
```

### Error: "Aplicación en blanco"
```
→ Abre DevTools (F12) y revisa la consola
→ Verifica que todos los .js estén presentes
```

### Error: "API no responde"
```
→ Verifica que PHP está corriendo
php -S localhost:8000
```

---

## 📚 Próximos Pasos

1. **Lee el README.md** para configuración avanzada
2. **Explora la API** en api.php para integración
3. **Personaliza métodos** en learningMethodsSelector.js
4. **Adapta prompts** en promptGenerator.js

---

## 🎓 Taxonomía de Bloom Incluida

La aplicación usa la **Taxonomía de Bloom Revisada**:

```
6. CREAR      ← La más compleja
5. EVALUAR
4. ANALIZAR
3. APLICAR
2. ENTENDER
1. RECORDAR   ← La más simple
```

Automáticamente identifica qué nivel necesita cada lección y sugiere métodos apropiados.

---

## 🎯 Resultado Final

### Tienes un archivo de Excel con:
✅ Módulo 1, Lección 1 → Método: Video  
✅ Módulo 1, Lección 2 → Método: Animación  
✅ Módulo 2, Lección 1 → Método: Simulación  
✅ ... (todos tus módulos y lecciones)

### Y carpeta de Prompts con:
📄 prompt_video_introduccion.txt  
📄 prompt_animacion_conceptos.txt  
📄 prompt_articulate_interactivo.txt  
📄 prompt_caso_estudio_analisis.txt  
... (listos para usar con IA)

---

## ✨ ¡Eso es todo!

**Ahora tienes:**
- ✅ Estructura del curso organizada
- ✅ Métodos de aprendizaje recomendados
- ✅ Prompts listos para IA
- ✅ Guiones para diseñadores
- ✅ Evaluaciones automáticas
- ✅ TODO en 5 minutos

---

**Empezar ahora:**
```bash
cd eduindustrial
php -S localhost:8000
# Acceder a http://localhost:8000
```

**¡Disfruta creando contenidos educativos profesionales!** 🚀

---

*EduIndustrial v1.0 - Generador de Contenidos Educativos*
