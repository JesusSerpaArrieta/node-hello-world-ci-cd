pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/JesusSerpaArrieta/node-hello-world-ci-cd.git'
            }
        }

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                bat 'npm test'
            }
        }

        stage('Ejecutar aplicación') {
            steps {
                bat 'npm start &'
                echo 'Aplicación iniciada en el puerto 7000.'
            }
        }
    }
}

