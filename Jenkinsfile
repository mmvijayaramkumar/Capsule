pipeline {
    agent any

    stages {
        stage('Build Task Manager Frontend') {
            steps {
                echo 'Building Task Manager Frontend..'
                bat 'cd ./frontend/ && npm install && npm run build --prod'
            }
        }
    }
}