pipeline {
    agent any

    stages {
        stage('Build Task Manager Frontend') {
            steps {
                echo 'Building Task Manager Frontend..'
                bat 'cd ./frontend/ && npm install && npm run build --prod'
            }
        }

        stage('Build Task Manager Backend') {
            steps {
                echo 'Building Task Manager Backend ..'
                bat 'cd ./backend/ && npm install --no-optional && npm run build'
            }
        }
    }
}