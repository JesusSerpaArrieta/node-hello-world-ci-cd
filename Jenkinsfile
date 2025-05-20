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

        stage('Deploy a Render') {
            steps {
                echo 'Haciendo deploy a Render...'
                bat 'curl -X POST "https://api.render.com/deploy/srv-d0mdsnuuk2gs73fj4vbg?key=ZfopCASVfPk"'
            }
        }
    }
}


