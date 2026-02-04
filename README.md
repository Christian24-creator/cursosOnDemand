# 📚 EduIndustrial - Generador Inteligente de Contenidos Educativos

> **Aplicación para análisis automático de contenidos y recomendación de métodos de aprendizaje basados en Taxonomía de Bloom**

## 🎯 Descripción del Proyecto

**EduIndustrial** es una aplicación profesional que automatiza el diseño instructivo de cursos de capacitación industrial (mantenimiento y confiabilidad). Analiza documentos existentes (temarios, manuales, dinámicas) y genera recomendaciones de métodos de aprendizaje en línea, prompts para IA, y guiones para diseñadores.

### ✨ Características Principales

- ✅ **Análisis Inteligente de Contenidos** - Procesa Excel, PowerPoint y Word
- ✅ **Taxonomía de Bloom Integrada** - Identifica niveles cognitivos automáticamente
- ✅ **Recomendación de Métodos** - 14 métodos de aprendizaje con scoring inteligente
- ✅ **Generación de Prompts** - Crea prompts para IA, guiones y especificaciones
- ✅ **Interfaz Moderna** - Diseño profesional, responsivo y accesible
- ✅ **Exportación Múltiple** - JSON, CSV, TXT, prompts individuales
- ✅ **Completamente Funcional** - Frontend 100% JavaScript, sin dependencias externas

---

## 🚀 Instalación y Configuración

### Requisitos Previos

- **PHP 7.4+** (recomendado 8.0+)
- **Servidor Web** (Apache, Nginx)
- **Navegador Moderno** (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

### Opción 1: Instalación Local

```bash
# 1. Clonar o descargar el proyecto
cd /path/to/eduindustrial

# 2. Iniciar servidor PHP local
php -S localhost:8000

# 3. Abrir en navegador
# http://localhost:8000
```

### Opción 2: En Servidor Web (Apache)

```bash
# 1. Copiar archivos a /var/www/html/eduindustrial
cp -r eduindustrial/ /var/www/html/

# 2. Verificar permisos
chmod -R 755 /var/www/html/eduindustrial
chmod -R 777 /var/www/html/eduindustrial/uploads

# 3. Acceder en navegador
# http://localhost/eduindustrial
# http://tu-dominio.com/eduindustrial
```

### Opción 3: Con Docker

```dockerfile
# Dockerfile
FROM php:8.0-apache
RUN docker-php-ext-install pdo mysql
COPY eduindustrial/ /var/www/html/
RUN chown -R www-data:www-data /var/www/html/
EXPOSE 80
```

```bash
docker build -t eduindustrial .
docker run -p 80:80 eduindustrial
```

---

## 📖 Guía de Uso

### 1. **Subir Documentos** 

La aplicación requiere 4 tipos de documentos:

#### 📅 Temario por Día (Excel .xlsx)
```
Estructura esperada:
├── Día 1
│   ├── Módulo 1: Introducción
│   │   └── Lecciones: Concepto 1, Concepto 2, etc.
├── Día 2
│   └── Módulo 2: Mantenimiento Preventivo
└── Día 3
    └── Módulo 3: Mantenimiento Predictivo
```

#### 📖 Manual Técnico (PowerPoint .pptx)
- Contenido base del curso
- Conceptos principales
- Información para extraer

#### 🎯 Dinámicas y Objetivos (PowerPoint .pptx)
- Actividades propuestas
- Objetivos de aprendizaje
- Instrucciones de dinámicas

#### ℹ️ Información Adicional (Word .docx)
- Prerequisitos
- Referencias
- Información complementaria

**Acción**: Arrastra archivos o haz clic para seleccionar.

---

### 2. **Análisis de Contenidos**

La aplicación automáticamente:

1. **Extrae estructura** del temario
2. **Consolida información** de todos los documentos
3. **Identifica objetivos** de aprendizaje
4. **Genera metadatos** sobre el curso

**Resultado**: Vista de módulos, lecciones y objetivos organizados.

---

### 3. **Métodos de Aprendizaje Recomendados**

Basado en **Taxonomía de Bloom Revisada**, la aplicación recomienda:

#### 📚 14 Métodos Disponibles:

| Método | Nivel Cognitivo | Conocimiento | Engagement | Retención |
|--------|-----------------|--------------|-----------|-----------|
| **Lectura** | 1-2 | Factual/Conceptual | ⭐⭐ | 20% |
| **Video** | 1-3 | Factual/Conceptual/Procedimental | ⭐⭐⭐⭐⭐ | 50% |
| **Animación** | 2-3 | Conceptual/Procedimental | ⭐⭐⭐⭐⭐⭐⭐⭐ | 65% |
| **Podcast** | 1-2 | Factual/Conceptual | ⭐⭐⭐ | 25% |
| **Infografía** | 2-3 | Conceptual/Procedimental | ⭐⭐⭐⭐⭐⭐ | 55% |
| **Ejercicio Interactivo** | 3-4 | Conceptual/Procedimental | ⭐⭐⭐⭐⭐⭐⭐⭐ | 75% |
| **Simulación** | 3-5 | Conceptual/Procedimental | ⭐⭐⭐⭐⭐⭐⭐⭐⭐ | 85% |
| **Caso de Estudio** | 4-6 | Conceptual/Metacognitivo | ⭐⭐⭐⭐⭐⭐⭐ | 80% |
| **Articulate 360** | 3-5 | Conceptual/Procedimental/Metacognitivo | ⭐⭐⭐⭐⭐⭐⭐⭐ | 80% |
| **Evaluación** | 1-6 | Todos | ⭐⭐⭐⭐ | 45% |
| **Foro/Discusión** | 2,4-5 | Conceptual/Metacognitivo | ⭐⭐⭐⭐⭐⭐⭐ | 60% |
| **Gamificación** | 1-3 | Factual/Conceptual/Procedimental | ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ | 70% |
| **Tutorial Paso a Paso** | 3 | Procedimental | ⭐⭐⭐⭐⭐⭐ | 70% |
| **Microlearning** | 1-2 | Factual | ⭐⭐⭐⭐⭐⭐ | 40% |

#### 🎓 Niveles Cognitivos (Bloom):
1. **Recordar** - Recuperar información
2. **Entender** - Explicar conceptos
3. **Aplicar** - Usar en situaciones nuevas
4. **Analizar** - Desglosar y comparar
5. **Evaluar** - Juzgar según criterios
6. **Crear** - Producir algo nuevo

---

### 4. **Generar Prompts y Guiones**

Click en **"Generar Prompts y Guiones"** para crear:

#### 📝 Tipos de Prompts Generados:

**1. Prompts para VIDEO**
```
Crea un guión para video de [duración] minutos
Tema: [nombre de lección]
Objetivo: [objetivo de aprendizaje]
Audiencia: Técnicos industriales
Requisitos: Ejemplos reales, gráficos, duración especificada
...
```

**2. Prompts para ANIMACIÓN**
```
Especificaciones de animación
Tema: [nombre]
Duración: 3-5 minutos
Elementos a animar: [lista]
Estilo: Moderno y profesional
...
```

**3. Prompts para ARTICULATE 360**
```
Diseña componente interactivo
SCORM compatible
Slides: [número]
Interactividad: [especificar]
Evaluación: 5-8 preguntas
...
```

**4. Prompts para CASOS DE ESTUDIO**
```
Desarrolla caso de estudio
Contexto: [información]
Estructura: Introducción → Datos → Actividades → Solución
Basado en: Situación real
...
```

**5. Prompts para SIMULACIONES**
```
Especifica simulación interactiva
Escenarios: Normal, Problema, Complejo
Variables controlables: [lista]
Retroalimentación: Inmediata y explicativa
...
```

#### ⚡ Acciones Disponibles:
- **📋 Copiar Prompt** - Copiar al portapapeles
- **💾 Descargar** - Descargar como archivo .txt
- **📤 Exportar Todos** - Descargar todos los prompts en un documento

---

### 5. **Vista Previa de Estructura**

Visualiza la estructura completa del curso:

```
📚 Módulo 1: Introducción a Mantenimiento
  Objetivos del Módulo:
  ✓ Comprender conceptos fundamentales
  ✓ Identificar tipos de mantenimiento
  ✓ Reconocer importancia estratégica
  
  Lecciones:
  🎯 Conceptos Básicos (120 min)
     Métodos: Video, Animación Interactiva
  
  🎯 Historia y Evolución (120 min)
     Métodos: Lectura, Caso de Estudio
  
  🎯 Importancia Estratégica (120 min)
     Métodos: Video, Ejercicio Interactivo
```

---

### 6. **Exportar Resultados**

#### 📄 Exportar como JSON
Incluye toda la estructura, análisis y prompts generados.

```json
{
  "metadata": {
    "timestamp": "2024-02-04 10:30:45",
    "courseTitle": "Mantenimiento Industrial",
    "filesAnalyzed": 4
  },
  "modules": [...],
  "learningMethods": {...},
  "prompts": [...]
}
```

#### 📊 Exportar como Excel/CSV
Tabla con módulos, lecciones, objetivos y métodos recomendados.

```
Módulo | Lección | Duración | Método1 | Método2 | Método3
--------|---------|----------|---------|---------|--------
Mod. 1 | Lección 1 | 120 | Video | Animación | Ejercicio
```

#### 📝 Exportar Prompts
Todos los prompts en documento de texto con formato.

#### 📋 Exportar Guiones
Especificaciones para videos, simulaciones y componentes interactivos.

---

## 🏗️ Estructura del Proyecto

```
eduindustrial/
├── index.html              # Interfaz principal
├── styles.css              # Estilos CSS (profesional)
├── api.php                 # Backend PHP
│
├── JavaScript - Módulos:
├── utils.js                # Utilidades generales
├── bloomTaxonomy.js        # Implementación Bloom
├── contentAnalyzer.js      # Análisis de contenidos
├── learningMethodsSelector.js # Selección de métodos
├── promptGenerator.js      # Generación de prompts
├── app.js                  # Lógica principal
│
├── uploads/                # Directorio temporal (requiere permisos 777)
└── README.md              # Este archivo
```

---

## 🔧 Configuración Avanzada

### Variables Globales (en app.js)

```javascript
// Estado global
const appState = {
    files: { temario: null, manual: null, dinamicas: null, info: null },
    analysis: { modules: [], lessons: [], objectives: [], rawData: {} },
    learningMethods: {},
    generatedContent: { prompts: [], scripts: [], guides: [] },
    metadata: { timestamp: null, courseTitle: '', instructor: '' }
};
```

### Personalizar Métodos de Aprendizaje

En `learningMethodsSelector.js`, modifica el objeto `methods`:

```javascript
VIDEO: {
    id: 'video',
    name: 'Video Educativo',
    engagement: 5,      // 1-10
    retention: 50,      // %
    duration: 5,        // minutos
    // ...
}
```

### Agregar Nuevos Métodos

```javascript
VIRTUAL_CLASSROOM: {
    id: 'virtual_classroom',
    name: 'Aula Virtual',
    icon: '🖥️',
    description: 'Sesiones sincrónicas en vivo',
    cognitiveLevel: [2, 3, 4],
    knowledgeTypes: ['conceptual', 'procedural'],
    duration: 60,
    engagement: 7,
    retention: 65
}
```

---

## 🔐 Seguridad

### Consideraciones de Producción:

1. **Validación de Archivos**
   - Solo permitir extensiones específicas
   - Verificar MIME types
   - Limitar tamaño máximo

2. **Almacenamiento**
   - Guardar en directorio fuera del web root
   - Implementar limitación de tiempo de retención
   - Limpiar archivos automáticamente

3. **CORS y CSRF**
   - Implementar CORS correctamente
   - Tokens CSRF en formularios
   - Headers de seguridad

### Ejemplo de Hardening PHP:

```php
// Validación estricta
$allowed_extensions = ['xlsx', 'xls', 'pptx', 'ppt', 'docx', 'doc'];
$max_filesize = 50 * 1024 * 1024; // 50MB

if (!in_array($ext, $allowed_extensions)) {
    throw new Exception('Extensión no permitida');
}

if ($file['size'] > $max_filesize) {
    throw new Exception('Archivo demasiado grande');
}

// Generar nombre único
$filename = bin2hex(random_bytes(16)) . '.' . $ext;
```

---

## 📚 API REST (Opcional)

Si necesitas integrar con otros sistemas:

```javascript
// JavaScript para usar la API
async function uploadFiles(formData) {
    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
    });
    return response.json();
}

// Analizar contenido
async function analyzeContent(files) {
    const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files })
    });
    return response.json();
}
```

---

## 🎓 Ejemplos de Uso

### Ejemplo 1: Curso de Mantenimiento Preventivo

**Entrada:**
- Temario: 3 días de capacitación
- Manual: 50 slides con conceptos
- Dinámicas: 4 actividades propuestas

**Proceso:**
1. Analiza temario → 3 módulos, 9 lecciones
2. Identifica objetivos → 27 objetivos totales
3. Determina niveles Bloom → Mix de 2-4
4. Recomienda métodos → Video + Simulación + Caso de Estudio

**Salida:**
- Prompts para 9 videos
- Especificaciones para 3 simulaciones
- Guiones para 2 casos de estudio
- Evaluación final (10 preguntas)

### Ejemplo 2: Capacitación en Confiabilidad

**Entrada:**
- Manual: Estándares ISO 13373
- Dinámicas: Análisis de fallas con FMEA
- Información: Normas aplicables

**Proceso:**
1. Extrae contenido técnico especializado
2. Identifica procesos complejos (análisis FMEA)
3. Niveles Bloom: 4-5 (Analizar, Evaluar)
4. Recomienda: Caso de Estudio + Simulación + Evaluación

**Salida:**
- Caso de estudio real con datos FMEA
- Simulador interactivo de análisis
- Evaluación con 15 preguntas análisis

---

## ❓ Preguntas Frecuentes

### ¿Qué formato exacto debe tener el Excel?
La aplicación es flexible. Busca patrones de:
- Módulos / Temas
- Lecciones / Subtemas
- Días / Sesiones
- Duraciones

### ¿Puedo usar esta aplicación sin los 4 documentos?
Sí. La aplicación funciona con mínimo 1 archivo. Con más archivos, más completo es el análisis.

### ¿Los prompts de IA funcionan con ChatGPT?
Sí. Los prompts están diseñados para trabajar con:
- ChatGPT 3.5 y 4
- Claude
- Copilot
- Otros LLMs

### ¿Cómo implemento Articulate 360?
Los prompts incluyen especificaciones SCORM. Puedes:
1. Copiar el prompt a ChatGPT
2. Pedir que genere un curso Articulate
3. Importar en Articulate Storyline

### ¿Debo instalar librerías PHP?
No es obligatorio para demostración. Para producción con análisis profundo:

```bash
composer require phpoffice/phpspreadsheet phpoffice/phppresentation phpoffice/phpword
```

---

## 🚀 Mejoras Futuras

- [ ] Integración con Articulate Storyline API
- [ ] Análisis de video y extracción de contenido
- [ ] Machine Learning para mejores recomendaciones
- [ ] Sincronización con LMS (Moodle, Blackboard)
- [ ] Colaboración en tiempo real
- [ ] Generación de reportes PDF
- [ ] Integración ChatGPT API
- [ ] Base de datos para historial de cursos
- [ ] Sistema de versiones
- [ ] Traducción automática

---

## 💬 Soporte y Contacto

Para reportar bugs, sugerencias o soporte:

1. **Documentación** - Lee este README completo
2. **Consola del Navegador** - Abre DevTools (F12) para ver errores
3. **Servidor PHP** - Verifica logs en `/var/log/php-fpm.log`

---

## 📄 Licencia

Este proyecto está disponible bajo licencia MIT.

---

## 🎉 ¡Empezar Ahora!

1. Carga tus documentos
2. Haz clic en "Analizar Archivos"
3. Revisa las recomendaciones de métodos
4. Genera prompts y guiones
5. Exporta en formato que necesites
6. ¡Comparte con tu equipo de diseño instruccional!

---

**Hecho con ❤️ para educadores e instructores industriales**

*EduIndustrial v1.0 - 2024*
