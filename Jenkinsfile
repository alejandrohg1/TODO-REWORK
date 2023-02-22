pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'cd Client && npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'test'
            }
        }
        stage('Build') {
            steps {
               echo 'build'
            }
        }
        stage('Deploy') {
            steps {
               echo 'deploy'
            }
        }
    }
}
