pipeline {
    agent any

    triggers {
        githubPush()
    }

    tools {
        nodejs 'node' // Ensure Node.js is configured in Jenkins Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Add your tests here (e.g., npm test)'
            }
        }
    }

    post {
        always {
            echo 'Build completed.'
        }
        success {
            echo 'Build successful! Ready for deployment.'
        }
        failure {
            echo 'Build failed. Please check the logs.'
        }
    }
}
