# 🌞 ABCSolar - Sitio Web Profesional

## 📋 Descripción del Proyecto

Sitio web completo y responsivo para **ABCSolar**, empresa de energía solar en México. Diseño profesional con galería de proyectos reales, calculadora de ahorros, y múltiples puntos de contacto.

---

## 📁 Estructura del Proyecto

```
ABC-main/
├── index.html                          # Página principal
├── galeria.html                        # Galería de proyectos
│
├── public/
│   ├── logo-abc-full.png              # Logo completo (Navbar)
│   ├── logo-abc-icon.png              # Logo solo icono (Footer)
│   └── logo-abc-dark.png              # Logo versión oscura
│
├── assets/
│   ├── css/
│   │   ├── base.css                   # Estilos base y variables
│   │   ├── components.css             # Componentes reutilizables
│   │   ├── sections.css               # Estilos por sección
│   │   ├── responsive.css             # Media queries y mobile
│   │   ├── animations.css             # Animaciones y transiciones
│   │   └── tokens.css                 # Design tokens y colores
│   │
│   ├── js/
│   │   ├── main.js                    # JavaScript principal
│   │   ├── nav-mobile.js              # Menú hamburguesa
│   │   ├── calculator.js              # Calculadora de ahorros
│   │   ├── tabs-faq.js                # Tabs y FAQ
│   │   └── theme-toggle.js            # Toggle tema claro/oscuro
│   │
│   └── images/
│       └── projects/                  # Fotos de proyectos reales
│           ├── proyecto-residencial-1.jpg
│           ├── proyecto-residencial-2.jpg
│           ├── proyecto-residencial-3.jpg
│           ├── proyecto-comercial-1.jpg
│           ├── proyecto-comercial-2.jpg
│           ├── proyecto-comercial-3.jpg
│           ├── proyecto-industrial-1.jpg
│           ├── proyecto-industrial-2.jpg
│           ├── proyecto-techo-1.jpg
│           ├── proyecto-techo-2.jpg
│           ├── proyecto-detalle-1.jpg
│           ├── proyecto-panel-detalle.jpg
│           └── proyecto-instalacion-1.jpg
│
└── Landing (metadatos y configuración)
```

---

## 🎨 Características Principales

### Página Principal (index.html)

✅ **Hero Section**
- Mosaico de imágenes de proyectos reales
- Proposición de valor clara
- Estadísticas en tiempo real

✅ **Sección de Beneficios**
- 6 tarjetas con beneficios principales
- Garantía de 25 años destacada
- ROI y financiamiento

✅ **Soluciones por Tipo**
- Tabs interactivos: Residencial, Comercial, Industrial
- Imágenes específicas para cada tipo
- Detalles y ventajas diferenciadas

✅ **Calculadora de Ahorros**
- Input de recibo mensual
- Cálculo dinámico de ahorros
- Comparación de escenarios

✅ **Portafolio de Proyectos**
- Galería de 6 proyectos destacados
- Enlace a galería completa
- Categorización por tipo

✅ **Testimonios y Estadísticas**
- 500+ proyectos completados
- 12M+ kWh generados
- 98% de satisfacción

✅ **Sección de Privacidad**
- Acuerdo de Confidencialidad
- Seguridad de datos garantizada
- Link para solicitar referencias

✅ **Formulario de Contacto**
- Campos optimizados
- Input numérico para recibos
- Integración con WhatsApp y email

✅ **Footer Completo**
- Información de contacto
- Links a redes sociales (Instagram, Facebook)
- Navegación secundaria

### Página de Galería (galeria.html)

✅ **Galería Completa**
- 13 proyectos en grid responsivo
- Filtros por categoría
- Overlay con información al hover

✅ **Categorización**
- Residencial
- Comercial
- Industrial

✅ **Optimización**
- Lazy loading en todas las imágenes
- Responsive design (mobile first)
- Carga rápida

---

## 📱 Responsividad

### Breakpoints
- **Mobile extremo**: 320px - 374px
- **Mobile**: 375px - 768px
- **Tablet**: 768px - 1100px
- **Desktop**: 1100px+

### Optimizaciones Móvil
✅ Menú hamburguesa funcional (toggle on/off)
✅ Imágenes optimizadas
✅ Texto responsive
✅ Botones grandes y clickeables
✅ Sin overflow horizontal

---

## 🎯 Datos de Contacto Integrados

### Teléfono
- **Número**: 7226220941
- **WhatsApp**: wa.me/527226220941
- **Integrado en**: Navbar, Footer, CTA, Formulario

### Email
- **Dirección**: contacto@abcsolar.com.mx
- **Integrado en**: Footer, Formulario, Enlaces

### Ubicación
- **Sede**: Toluca, Estado de México, México
- **Mostrado en**: Footer

### Redes Sociales
- **Facebook**: facebook.com/ABCSTechnologies
- **Instagram**: instagram.com/abcsolar_/

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Semántico y accesible
- **CSS3**: Variables, Grid, Flexbox, Animaciones
- **JavaScript**: Vanilla JS (sin dependencias)

### Optimizaciones
- **Imágenes**: Optimizadas a 80% calidad (25% menos tamaño)
- **CSS**: Minificado y organizado por módulos
- **JS**: Código modular y eficiente
- **Carga**: Lazy loading en imágenes

### Herramientas
- Python PIL: Optimización de imágenes
- Bash: Automatización
- Git-friendly: Sin dependencias externas

---

## 📊 Datos Incluidos

### Empresa
- **Nombre**: ABCSolar
- **Slogan**: "Tu aliado en energía"
- **Años de experiencia**: 15+
- **Proyectos completados**: 500+
- **Satisfacción**: 98%

### Cobertura
- Estado de México
- Ciudad de México
- Guanajuato
- Querétaro
- San Luis Potosí
- Puebla
- Veracruz
- Tabasco

### Marcas de Paneles
- Trina Solar
- Renesola
- Longi
- Hoymiles
- Huawei
- Growatt
- SMA
- Fronius

### Servicios
- Eficiencia energética
- Venta de sistemas fotovoltaicos
- Instalación de cargadores eléctricos
- Instalaciones eléctricas
- Luminarias solares
- Movilidad eléctrica

---

## 🚀 Guía de Uso

### Para Ver Localmente
```bash
# Abrir en navegador (desde la carpeta del proyecto)
open index.html
# O en navegador: file:///ruta/a/ABC-main/index.html
```

### Para Publicar en Servidor
1. Subir toda la carpeta `ABC-main/` a hosting
2. Asegurar que `index.html` sea la página por defecto
3. Configurar SSL/HTTPS (recomendado)
4. Probar en diferentes navegadores y dispositivos

### Modificar Información
- **Datos de empresa**: Buscar en `index.html` y `galeria.html`
- **Contacto**: Cambiar teléfono y email en múltiples ubicaciones
- **Imágenes**: Reemplazar archivos en `/assets/images/projects/`
- **Colores**: Editar variables en `/assets/css/tokens.css`

---

## ✨ Mejoras Futuras Sugeridas

### Fase 2
- [ ] Integraciones con APIs (clima, criptomonedas)
- [ ] Blog con artículos sobre energía solar
- [ ] Cálculo avanzado de ROI con gráficos
- [ ] Testimonios en video
- [ ] Chat en vivo

### Fase 3
- [ ] E-commerce para productos
- [ ] Portal cliente para monitoreo
- [ ] Multilingual (español/inglés)
- [ ] App móvil
- [ ] Analytics avanzado

---

## 📞 Soporte y Mantenimiento

### Cambios Frecuentes
- Actualizar proyectos en galería cada trimestre
- Revisar enlaces a redes sociales
- Verificar formularios de contacto
- Actualizar contenido de beneficios

### Optimizaciones
- Revisar velocidad de carga mensualmente
- Actualizar imágenes con compresión nueva
- A/B testing de CTAs
- SEO audit trimestral

---

## 📄 Archivos de Documentación

Se incluyen estos documentos:

1. **CAMBIOS_REALIZADOS.md**
   - Historial de cambios realizados
   - Fixes técnicos aplicados
   - Actualizaciones de información

2. **INTEGRACION_IMAGENES.md**
   - Detalles de imágenes integradas
   - Logos utilizados
   - Ubicaciones en el sitio

3. **README.md** (este archivo)
   - Guía completa del proyecto
   - Instrucciones de uso
   - Información de mantenimiento

---

## ✅ Checklist Antes de Publicar

- [ ] Revisar todos los links (internos y externos)
- [ ] Probar formularios de contacto
- [ ] Verificar teléfono y email en todas partes
- [ ] Testear en móvil (iOS y Android)
- [ ] Testear en navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Verificar carga de imágenes
- [ ] Revisar velocidad de carga
- [ ] Configurar analytics
- [ ] Configurar Google Search Console
- [ ] Generar sitemap.xml
- [ ] Crear robots.txt
- [ ] Configurar redirecciones 301 si hay cambios de URL

---

## 🎉 Conclusión

**ABCSolar ya cuenta con un sitio web profesional, moderno y completamente funcional** que destaca los proyectos reales de la empresa, proporciona herramientas útiles para clientes potenciales, y facilita el contacto directo.

### Puntos Fuertes
✅ Diseño moderno y profesional
✅ 100% responsivo en todos los dispositivos
✅ Imágenes reales y auténticas
✅ Múltiples puntos de contacto
✅ Optimizado para velocidad
✅ Sin dependencias externas
✅ Fácil de mantener y actualizar

---

**Versión**: 2026 v1.0
**Última actualización**: 25 de mayo de 2026
**Desarrollado por**: ABCSolar Senior Web Team ⚡

