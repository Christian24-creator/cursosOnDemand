/**
 * APLICACIÓN PRINCIPAL
 * Coordina toda la funcionalidad de la aplicación
 */

// Configuración de validación de archivos
const FILE_CONFIG = {
    temario: {
        extensions: ['xlsx', 'xls'],
        maxSize: 10 * 1024 * 1024 // 10MB
    },
    manual: {
        extensions: ['pptx', 'ppt'],
        maxSize: 50 * 1024 * 1024 // 50MB
    },
    dinamicas: {
        extensions: ['pptx', 'ppt'],
        maxSize: 50 * 1024 * 1024 // 50MB
    },
    info: {
        extensions: ['docx', 'doc'],
        maxSize: 10 * 1024 * 1024 // 10MB
    }
};

/**
 * GESTOR DE CARGA DE ARCHIVOS
 */
class FileUploadManager {
    constructor() {
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Configurar drag & drop para cada input
        ['temario', 'manual', 'dinamicas', 'info'].forEach(type => {
            this.setupFileInput(type);
        });
        
        // Botones de acción
        document.getElementById('analyzeBtn').addEventListener('click', () => this.analyze());
        document.getElementById('clearBtn').addEventListener('click', () => this.clearAll());
    }
    
    setupFileInput(type) {
        const input = document.getElementById(`${type}File`);
        const label = input.nextElementSibling;
        const status = document.getElementById(`${type}Status`);
        
        // Click para seleccionar archivo
        input.addEventListener('change', (e) => this.handleFileSelect(type, e.target.files[0]));
        
        // Drag & Drop
        label.addEventListener('dragover', (e) => {
            e.preventDefault();
            label.classList.add('drag-over');
        });
        
        label.addEventListener('dragleave', () => {
            label.classList.remove('drag-over');
        });
        
        label.addEventListener('drop', (e) => {
            e.preventDefault();
            label.classList.remove('drag-over');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFileSelect(type, files[0]);
            }
        });
    }
    
    handleFileSelect(type, file) {
        if (!file) return;
        
        const config = FILE_CONFIG[type];
        const validation = FileValidator.validate(file, config);
        const status = document.getElementById(`${type}Status`);
        const label = document.querySelector(`#${type}File`).nextElementSibling;
        const input = document.getElementById(`${type}File`);
        
        if (!validation.valid) {
            status.textContent = '❌ ' + validation.error;
            status.classList.add('error');
            input.value = '';
            Toast.error(validation.error);
            return;
        }
        
        // Archivo válido
        appState.files[type] = file;
        status.textContent = `✅ ${file.name} (${FileUtils.getFormattedSize(file.size)})`;
        status.classList.remove('error');
        status.classList.add('success');
        
        label.textContent = `✅ ${file.name}`;
        label.style.opacity = '0.6';
        
        Toast.success(`${type}: Archivo cargado correctamente`);
    }
    
    async analyze() {
        // Validar que hay al menos un archivo
        const hasFiles = Object.values(appState.files).some(f => f);
        if (!hasFiles) {
            Toast.warning('Por favor, carga al menos un archivo');
            return;
        }
        
        try {
            // Analizar contenidos
            await ContentAnalyzer.analyzeAll(appState.files);
            
            // Generar recomendaciones de métodos
            LearningMethodsSelector.generateRecommendations();
            
            // Mostrar métodos en UI
            SectionManager.switchSection('learning-methods');
            LearningMethodsSelector.displayLearningMethods();
            
            Toast.success('Análisis completado. Métodos recomendados generados.');
            
        } catch (error) {
            Toast.error('Error durante el análisis: ' + error.message);
        }
    }
    
    clearAll() {
        // Limpiar archivos
        appState.files = {
            temario: null,
            manual: null,
            dinamicas: null,
            info: null
        };
        
        // Limpiar UI
        ['temario', 'manual', 'dinamicas', 'info'].forEach(type => {
            const input = document.getElementById(`${type}File`);
            const label = input.nextElementSibling;
            const status = document.getElementById(`${type}Status`);
            
            input.value = '';
            label.textContent = `📁\nSeleccionar archivo`;
            label.style.opacity = '1';
            status.textContent = '';
            status.classList.remove('success', 'error');
        });
        
        Toast.info('Todos los archivos fueron eliminados');
    }
}

/**
 * GESTOR DE VISTA PREVIA
 */
class PreviewManager {
    static displayPreview() {
        const container = document.getElementById('previewContent');
        
        if (!appState.analysis.modules || appState.analysis.modules.length === 0) {
            container.innerHTML = '<div class="empty-state"><span class="empty-icon">👁️</span><p>Analiza archivos primero</p></div>';
            return;
        }
        
        let html = '';
        
        appState.analysis.modules.forEach(module => {
            html += `
            <div class="preview-module expanded">
                <div class="preview-module-header" onclick="this.parentElement.classList.toggle('collapsed'); this.parentElement.classList.toggle('expanded');">
                    <div class="preview-module-title">📚 ${module.name}</div>
                    <div class="preview-module-toggle">▼</div>
                </div>
                
                <div class="preview-module-content">
                    <div class="preview-objectives">
                        <h4>Objetivos del Módulo</h4>
                        ${module.objectives.map(obj => `<div class="objective-item">${obj}</div>`).join('')}
                    </div>
                    
                    <div class="preview-lessons">
                        <h4>Lecciones (${module.lessons.length})</h4>
                        ${module.lessons.map(lesson => {
                            const methods = appState.learningMethods[module.id]?.lessons[lesson.id]?.methods || [];
                            const methodsStr = methods.slice(0, 2).map(m => m.name).join(', ') || 'Por definir';
                            
                            return `
                            <div class="preview-lesson">
                                <div class="preview-lesson-name">${lesson.name}</div>
                                <div class="preview-lesson-method">Métodos: ${methodsStr}</div>
                                <div style="font-size: 11px; color: var(--color-text-lighter); margin-top: 4px;">Duración: ${lesson.duration} min</div>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
            `;
        });
        
        container.innerHTML = html;
    }
}

/**
 * GESTOR DE EXPORTACIÓN
 */
class ExportManager {
    static setupExportButtons() {
        document.getElementById('exportJson').addEventListener('click', () => this.exportJSON());
        document.getElementById('exportExcel').addEventListener('click', () => this.exportExcel());
        document.getElementById('exportPrompts').addEventListener('click', () => this.exportPrompts());
        document.getElementById('exportScripts').addEventListener('click', () => this.exportScripts());
    }
    
    static exportJSON() {
        const data = {
            metadata: appState.metadata,
            modules: appState.analysis.modules,
            learningMethods: appState.learningMethods,
            prompts: appState.generatedContent.prompts,
            generatedAt: DateUtils.getNow()
        };
        
        ExportUtils.downloadJSON(data, `eduindustrial_${DateUtils.getNow('YYYY-MM-DD_HH-mm-ss')}.json`);
        Toast.success('Datos exportados como JSON');
    }
    
    static exportExcel() {
        const data = [];
        
        appState.analysis.modules.forEach(module => {
            module.lessons.forEach(lesson => {
                const methods = appState.learningMethods[module.id]?.lessons[lesson.id]?.methods || [];
                data.push({
                    Módulo: module.name,
                    Lección: lesson.name,
                    Duración: lesson.duration,
                    Método1: methods[0]?.name || '',
                    Método2: methods[1]?.name || '',
                    Método3: methods[2]?.name || '',
                    Objetivos: lesson.objectives.join('; ')
                });
            });
        });
        
        ExportUtils.downloadCSV(data, `estructura_curso_${DateUtils.getNow('YYYY-MM-DD')}.csv`);
        Toast.success('Estructura exportada como CSV/Excel');
    }
    
    static exportPrompts() {
        if (!appState.generatedContent.prompts || appState.generatedContent.prompts.length === 0) {
            Toast.warning('No hay prompts generados para exportar');
            return;
        }
        
        let content = 'PROMPTS GENERADOS PARA EDUINDUSTRIAL\n';
        content += `Generado: ${DateUtils.getNow()}\n`;
        content += '='.repeat(80) + '\n\n';
        
        appState.generatedContent.prompts.forEach((prompt, idx) => {
            content += `[${idx + 1}] ${prompt.title}\n`;
            content += `-`.repeat(80) + '\n';
            content += `Módulo: ${prompt.moduleName}\n`;
            content += `Lección: ${prompt.lessonName}\n`;
            content += `Método: ${prompt.method.name}\n`;
            content += `Formato: ${prompt.format}\n\n`;
            content += prompt.prompt;
            content += '\n\n' + '='.repeat(80) + '\n\n';
        });
        
        ExportUtils.downloadText(content, `prompts_${DateUtils.getNow('YYYY-MM-DD')}.txt`);
        Toast.success('Prompts exportados');
    }
    
    static exportScripts() {
        let content = 'GUIONES Y ESPECIFICACIONES\n';
        content += `Generado: ${DateUtils.getNow()}\n`;
        content += '='.repeat(80) + '\n\n';
        
        const videoPrompts = appState.generatedContent.prompts.filter(p => p.type === 'video');
        
        if (videoPrompts.length === 0) {
            content += 'No hay guiones de video para exportar.\n';
        } else {
            videoPrompts.forEach((prompt, idx) => {
                content += `GUIÓN ${idx + 1}: ${prompt.title}\n`;
                content += `-`.repeat(60) + '\n';
                content += prompt.prompt;
                content += '\n\n';
            });
        }
        
        ExportUtils.downloadText(content, `guiones_${DateUtils.getNow('YYYY-MM-DD')}.txt`);
        Toast.success('Guiones exportados');
    }
}

/**
 * GESTOR DE FLUJO PRINCIPAL
 */
class AppFlow {
    static init() {
        // Inicializar managers
        new FileUploadManager();
        ExportManager.setupExportButtons();
        
        // Event listener para generar prompts
        document.addEventListener('generatePrompts', () => {
            PromptGenerator.generateAllPrompts();
            PromptGenerator.displayPrompts();
            SectionManager.switchSection('content-generation');
        });
        
        // Event listener para vista previa
        document.addEventListener('showPreview', () => {
            PreviewManager.displayPreview();
            SectionManager.switchSection('preview');
        });
        
        // Botones adicionales en learning methods
        setTimeout(() => {
            this.setupLearningMethodsButtons();
        }, 100);
    }
    
    static setupLearningMethodsButtons() {
        // Crear botones de acción si no existen
        const container = document.getElementById('learningMethodsContent');
        
        // Agregar botones de acción al final
        const actionButtons = document.createElement('div');
        actionButtons.className = 'action-buttons';
        actionButtons.style.marginTop = '32px';
        actionButtons.innerHTML = `
            <button class="btn btn-primary" onclick="document.dispatchEvent(new Event('generatePrompts'))">
                <span class="btn-icon">✨</span>
                Generar Prompts y Guiones
            </button>
            <button class="btn btn-secondary" onclick="document.dispatchEvent(new Event('showPreview'))">
                <span class="btn-icon">👁️</span>
                Ver Estructura
            </button>
        `;
        
        const existing = container.querySelector('.action-buttons');
        if (existing) existing.remove();
        
        if (container.querySelector('.learning-method-card')) {
            container.appendChild(actionButtons);
        }
    }
}

/**
 * INICIALIZACIÓN AL CARGAR LA PÁGINA
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('EduIndustrial iniciando...');
    AppFlow.init();
    Toast.info('Bienvenido a EduIndustrial - Generador de Contenidos Educativos');
});

/**
 * OBSERVADOR DE CAMBIOS EN MÉTODOS DE APRENDIZAJE
 * Para actualizar botones cuando se generan recomendaciones
 */
const methodsObserver = setInterval(() => {
    if (Object.keys(appState.learningMethods).length > 0 && 
        !document.querySelector('.action-buttons')) {
        AppFlow.setupLearningMethodsButtons();
        clearInterval(methodsObserver);
    }
}, 500);
