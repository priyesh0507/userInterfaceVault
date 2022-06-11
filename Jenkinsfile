pipeline {
    agent any
    tools { 
        maven "mvn" 
        jdk "jdk8"
    }
    stages {
        stage ('Initialize') {
            steps {
                sh '''
                    echo "PATH = ${PATH}"
                    echo "M2_HOME = ${M2_HOME}"
                ''' 
            }
        }

        stage ('Build') {
            steps {
                sh 'pwd'
                sh 'ls -al'
                echo 'This is a minimal pipeline.'
                sh 'npm install'
            }
        }
		stage ('Lint') {
            steps {
                sh 'ng lint'
            }
        }
        stage("Build image") {
            steps {
                script {
                    myapp = docker.build("ashwani13/userInterfaceVault:${env.BUILD_ID}")
                }
            }
        }
        stage("Push image") {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                            myapp.push("latest")
                            myapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }
        stage("Deployment") {
            steps {
                script {
                    sh("sudo kubectl apply -f deployment.yaml")
                }
            }
        }
    }
}
