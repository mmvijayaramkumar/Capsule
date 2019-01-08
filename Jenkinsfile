pipeline {
    agent any

    stages {
        stage('UI Frontend - Build') {
            steps {
                echo 'Building Task Manager Frontend..'
                bat 'cd ./frontend/ && npm install && npm run build --prod'
            }
        }

        stage('Node Backend - Build') {
            steps {
                echo 'Building Task Manager Backend ..'
                bat 'cd ./backend/ && npm install --no-optional && npm run build'
            }
        }
        stage('Node Backend - Testing') {
            steps {
                echo 'Testing Backend...'
                bat 'cd ./backend/ && npm test'
            }
        }
    }
}