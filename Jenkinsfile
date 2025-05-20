pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Clonar repo (build parte 1)
                git branch: 'main', url: 'https://github.com/JesusSerpaArrieta/node-hello-world-ci-cd.git'
                
                // Construir imagen Docker (build parte 2)
                bat 'docker build -t node-hola-mundo .'
            }
        }

        stage('Test') {
            steps {
                // Ejecutar pruebas dentro del contenedor (opcional)
                bat 'docker run --rm node-hola-mundo npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Parar y eliminar contenedor anterior si existe
                bat 'docker stop nodoapp || echo "No hay contenedor corriendo"'
                bat 'docker rm nodoapp || echo "No hay contenedor para eliminar"'

                // Correr nuevo contenedor en background, exponiendo puerto 3000
                bat 'docker run -d -p 3000:3000 --name nodoapp node-hola-mundo'
            }
        }
    }
}
