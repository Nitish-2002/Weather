pipeline {
    agent any
    environment{
        LINK="https://dev.bold.divami.com/"
    }
    stages {
        
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
    }
    post {
        always {
            script {
                def message = "Project Name: ${JOB_NAME}\n" +
                              "Build Number: ${BUILD_NUMBER}\n" +
                              "Git Branch: ${GIT_BRANCH}\n" +
                              "Environment: dev\n"
    
                def buildResult = currentBuild.currentResult
                if (buildResult == "SUCCESS") {
                    message += "Output: ${LINK}\n" +
                               "Build Result: Success"
                } else {
                    message += "Output Log: ${RUN_DISPLAY_URL}\n" +
                               "Build Result: Failed"
                }
    
                googlechatnotification message: message, url: "https://chat.googleapis.com/v1/spaces/AAAAfNYHbig/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=u89eZfp6STAOknfuFlWc3vdY4mUG6hwz55MiCVSub60"
            }
            cleanWs()
        }
    }
}
