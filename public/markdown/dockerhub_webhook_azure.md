# DockerHub WebHooks with Azure

### **Report on the Automated Application Update Process**

1. **PR and Merge to `main`**: Changes were made to the application code, reviewed, and merged into the main branch (`main`) in GitHub.

2. **GitHub Actions**:
   - The pipeline built a new Docker image based on the updated code.
   - Tests were executed during the CI process to ensure the application works correctly.
   - The Docker image was pushed to DockerHub with the updated tag.

3. **DockerHub**: After the image was pushed, DockerHub triggered the configured webhook.

4. **Webhook**: The webhook notified Azure App Service about the new image version.

5. **Azure App Service**: Azure pulled the latest image from DockerHub and automatically updated the application by restarting the service with the new image.

---

### **Summary**
The process is fully automated, from code changes to deploying the new version on Azure App Service. This setup ensures the application always uses the latest image, minimizes errors, and shortens deployment time.

![Julia Golemo Learning Jurney Deployment ](/images/markdown/webhook_dh.png)