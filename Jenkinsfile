pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/JesusSerpaArrieta/node-ci-cd-jenkins.git'
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
                echo 'Aplicación iniciada en el puerto 3000.'
            }
        }
    }
}
