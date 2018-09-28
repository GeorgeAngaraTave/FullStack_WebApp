IONIC
======================
Hola Curso

## Introducción ##

### Verificamos la instalación de ionic y cordova

    # npm install -g ionic@latest cordova@latest

### Generando la primer aplicación en ionic

    # ionic start MiPrimerApp blank   
    # cd pruebaqr/
    
### Agregar páginas 

    # ionic g page guardados
    # ionic g page mapa
    # ionic g page tabs

### Instalaación de Scanner (paquete)

    # Notivo: https://ionicframework.com/docs/native/
    ionic cordova plugin add phonegap-plugin-barcodescanner
    # npm install --save @ionic-native/barcode-scanner

## Ejecutar

    # ionic cordova platform add android
    ionic cordova build android
    # Impotar el proyecto en android studio

- Se crea en la raíz un carpeta llamada platforms/ donde esta el código compilado de andriod






