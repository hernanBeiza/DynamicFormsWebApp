# DynamicFormsWebApp
 Ejemplo de formularios dinámicos en Angular

## Estructura JSON Maqueta

### Estructura

https://beta5.objgen.com/json/local/design

````
id n = 1
configuracion
  id n = 1
  nombre s = Tramitar
  menu
    id n = 1
    titulo s = Configuración
    icono = settings
    accion
      id n = 2
      codigo s = abrirMenu
    botones[]
      id n = 1
      icono = video_settings
      glosa s = Config
      accion
        id n = 1
        codigo s = abrirBarraLateral
    botones[]
      id n = 2
      icono = priority_high
      glosa s = Config
      accion
        id n = 4
        codigo s =
  pestanas[]
    id n = 1
    titulo s = Configuración General
    formularios[]
      id n = 1
      titulo s = Configuración General
      campos[]
        id n = 1
        tipoCampo
          id n = 1
          glosa s = Label
        glosa s = Soy un Label
      campos[]
        id n = 1
        tipoCampo
          id n = 2
          glosa s = RadioButtonGroup
        glosa s = Soy un RadioButtonGroup
        opciones[]
          id n = 10
          glosa s = Uno
          valor n = 1
          seleccionado b = true
        opciones[]
          id n = 20
          glosa s = Dos
          valor n = 2      
          seleccionado b = false
      campos[]
        id n = 1
        tipoCampo
          id n = 1
          glosa s = Label
        glosa s = Otra opción
      campos[]
        id n = 1
        tipoCampo
          id n = 2
          glosa s = RadioButtonGroup
        glosa s = Tipo de algo
        opciones[]
          id n = 10
          glosa s = Algo 1
          valor n = 1
          seleccionado b = true
        opciones[]
          id n = 20
          glosa s = Aglo 2
          valor n = 2      
          seleccionado b = false
      campos[]
        id n = 1
        tipoCampo
          id n = 1
          glosa s = Label
        glosa s = Soy un Label 2
      campos[]
        id n = 1
        tipoCampo
          id n = 4
          glosa s = CheckBoxGroup
        glosa s = Soy un CheckBoxGroup
        opciones[]
          id n = 110
          glosa s = Diez
          valor n = 1
          seleccionado b = false
        opciones[]
          id n = 220
          glosa s = Veinte
          valor n = 2      
          seleccionado b = true
      campos[]
        id n = 1
        tipoCampo
          id n = 1
          glosa s = Label
        glosa s = Otra prueba de checks
      campos[]
        id n = 100
        tipoCampo
          id n = 4
          glosa s = CheckBoxGroup
        glosa s = Soy un CheckBoxGroup
        opciones[]
          id n = 1110
          glosa s = Check 1
          valor n = 1
          seleccionado b = false
        opciones[]
          id n = 2220
          glosa s = Check 2
          valor n = 2      
          seleccionado b = true
        opciones[]
          id n = 3330
          glosa s = Check 3
          valor n = 2
          seleccionado b = true
        opciones[]
          id n = 4440
          glosa s = Check 4
          valor n = 2      
          seleccionado b = true
      campos[]
        id n = 1
        tipoCampo
          id n = 1
          glosa s = Label
        glosa s = Soy un Label 3
      campos[]
        id n = 1
        tipoCampo
          id n = 6
          glosa s = Combobox
        glosa s = Soy un Combobox
        opciones[]
          id n = 1110
          glosa s = Diez
          valor n = 1
          seleccionado b = false
        opciones[]
          id n = 2220
          glosa s = Veinte
          valor n = 2      
          seleccionado b = true
      campos[]
        id n = 1
        tipoCampo
          id n = 7
          glosa s = Switch
        glosa s = Soy un Switch
        seleccionado b = true
  pestanas[]
    id n = 2
    titulo s = Tramitar
    formularios[]
      id n = 3
      titulo s = Tipo de vista por defecto en Trámites Pendientes
      campos[]
        id n = 1
        tipoCampo
          id n = 1
          glosa s = Label
        glosa s = Personalización
      campos[]
        id n = 10
        tipoCampo
          id n = 2
          glosa s = RadioButtonGroup
        glosa s = Tipos de Vista:
        opciones[]
          id n = 110
          glosa s = Por Folio
          valor n = 1
          seleccionado b = true
        opciones[]
          id n = 220
          glosa s = Por Resolución
          valor n = 2      
          seleccionado b = false
        opciones[]
          id n = 330
          glosa s = Por Fecha
          valor n = 3
          seleccionado b = false
        opciones[]
          id n = 440
          glosa s = Por Trámite
          valor n = 4      
          seleccionado b = false
        opciones[]
          id n = 550
          glosa s = Por Etapa
          valor n = 5      
          seleccionado b = false

    formularios[]
      id n = 4
      titulo s = Visualización de documentos
      campos[]
        id n = 1
        tipoCampo
          id n = 1
          glosa s = Label
        glosa s = Mostrar documento de escrito en:
      campos[]
        id n = 10
        tipoCampo
          id n = 2
          glosa s = RadioButtonGroup
        glosa s = Mostrar documento de escrito en:
        opciones[]
          id n = 110
          glosa s = Izquierda
          valor n = 1
          seleccionado b = true
        opciones[]
          id n = 220
          glosa s = Derecha
          valor n = 2      
          seleccionado b = false
        opciones[]
          id n = 330
          glosa s = Pestaña nueva del navegador
          valor n = 3
          seleccionado b = false
      campos[]
        id n = 1
        tipoCampo
          id n = 1
          glosa s = Label
        glosa s = Mostrar documento de trámite pendiente en:
      campos[]
        id n = 20
        tipoCampo
          id n = 2
          glosa s = RadioButtonGroup
        glosa s = Mostrar documento de trámite pendiente en:
        opciones[]
          id n = 1110
          glosa s = Izquierda
          valor n = 1
          seleccionado b = true
        opciones[]
          id n = 21220
          glosa s = Derecha
          valor n = 2      
          seleccionado b = false
        opciones[]
          id n = 33330
          glosa s = Pestaña nueva del navegador
          valor n = 3
          seleccionado b = false
````



## Tablas

Tipos de Campos

| ID   | Tipo             |
| ---- | :--------------- |
| 1    | Label            |
| 2    | RadioButtonGroup |
| 3    | RadioButton      |
| 4    | CheckboxGroup    |
| 5    | Checkbox         |
| 6    | Combobox         |
| 7    | Switch           |

