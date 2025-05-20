pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                git branch: 'main', url: 'https://github.com/JesusSerpaArrieta/node-hello-world-ci-cd.git'
                bat 'docker build -t node-hola-mundo .'
            }
        }

        stage('Test') {
            steps {
                bat 'docker run --rm node-hola-mundo npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Detener y eliminar contenedor si existe, ignorar errores
                bat 'docker stop nodoapp || echo "No hay contenedor corriendo"'
                bat 'docker rm nodoapp || echo "No hay contenedor para eliminar"'

                // Lanzar contenedor en background
                bat 'docker run -d -p 3000:3000 --name nodoapp node-hola-mundo'
            }
        }
    }

    post {
        success {
            echo 'Pipeline finalizado con éxito.'
        }
        failure {
            echo '¡Pipeline falló! Revisa los logs.'
        }
        always {
            echo 'Ejecución terminada.'
        }
    }
}
