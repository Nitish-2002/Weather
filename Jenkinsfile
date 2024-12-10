pipeline {
    agent any
    environment{
        LINK="https://dev.bold.divami.com/"
    }
    stages {
        stage('get_commit_msg') {
            steps {
                script {
                    env.GIT_COMMIT_MSG = sh(script: 'git log -1 --pretty=%B', returnStdout: true).trim()
                    env.GIT_COMMIT_EMAIL = sh(script: 'git --no-pager show -s --format=%ae', returnStdout: true).trim()
                    echo "Git committer email: ${GIT_COMMIT_EMAIL}"
                    echo "${GIT_COMMIT_MSG}"
                }
            }
        }
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
                              "Commit Message: ${GIT_COMMIT_MSG}\n" +
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
        }
    }
}
