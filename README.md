# Michis & Dulzura - Proyecto Front-End

Este repositorio contiene el código fuente de "Michis & Dulzura", un proyecto académico para poner en práctica conceptos de desarrollo web Front-End.

> **Nota de Actualización de Entrega:** Esta nueva versión del proyecto incluye la integración y migración hacia el framework **Angular**, modernizando la arquitectura original basada en Vanilla JS/jQuery hacia un entorno basado en componentes y TypeScript.

## Descripción del Proyecto

"Michis & Dulzura" es una plataforma de e-commerce dedicada a una fundación de gatos, que ofrece productos temáticos como alimentos y arte personalizado. El proyecto busca proporcionar una experiencia de usuario profesional y atractiva, con funcionalidades clave de comercio electrónico manejadas enteramente desde el lado del cliente (Front-End).

### Características Principales

*   **Catálogo Dinámico:** Los productos se cargan y renderizan dinámicamente a partir de una fuente de datos en formato JSON, simulando una petición a una API externa.
*   **Sistema de Favoritos:** Los usuarios pueden marcar productos como favoritos. Esta selección persiste incluso si se cierra el navegador gracias al uso de `localStorage`.
*   **Formulario de Contacto:** Incluye validaciones del lado del cliente para asegurar que los datos ingresados sean correctos antes de procesarlos.
*   **Diseño Responsivo:** Interfaz moderna, usando paletas de colores amigables y un layout (basado en Flexbox y Bootstrap 5) que se adapta perfectamente a dispositivos móviles, tablets y pantallas de escritorio.

## Tecnologías Utilizadas

*   **Framework Principal:** Angular (TypeScript)
*   **Estructura y Maquetación:** HTML5 Semántico
*   **Estilos y UI:** CSS3 y Bootstrap 5
*   **Persistencia de Datos Local:** Web Storage API (`localStorage`)

## Estructura del Proyecto

El proyecto ha sido estructurado bajo los estándares de **Angular**, orientado a componentes modulares:

```text
Michis-Dulzura-Proyecto-FrontEnd/
├── public/                 # Activos estáticos públicos (imágenes base, favicon)
├── src/                    # Código fuente principal de la aplicación
│   ├── app/                # Lógica principal, componentes y servicios
│   │   ├── components/     # Componentes reutilizables (Navbar, Products, Contact...)
│   │   ├── services/       # Servicios inyectables (Manejo de datos y estado)
│   │   └── app.component.* # Componente raíz
│   ├── assets/             # Recursos de la aplicación (data.json, imágenes de productos)
│   ├── styles.css          # Estilos globales de la aplicación
│   └── index.html          # Archivo HTML principal
├── angular.json            # Configuración del entorno de Angular
├── package.json            # Dependencias y scripts del proyecto (npm)
└── README.md               # Documentación del proyecto
```
