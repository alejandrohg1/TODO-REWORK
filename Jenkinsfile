pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
               bat 'cd Client && npm install'
            }
        }
        stage('Deploy') {
            steps {
                bat 'cd Client && npm run build'
            }
        }
    }
}
