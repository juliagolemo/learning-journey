# DockerHub WebHooks with Azure

### **Report on the Automated Application Update Process**

1. **PR and Merge to `main`**: Changes were made to the application code, reviewed, and merged into the main branch (`main`) in GitHub.

2. **GitHub Actions**:
   - The pipeline built a new Docker image based on the updated code.
   - Tests were executed during the CI process to ensure the application works correctly.
   - The Docker image was pushed to DockerHub with the updated tag.

3. **DockerHub**: After the image was pushed, DockerHub triggered the configured webhook.

4. **Fixing Azure Configuration for Webhook Integration**:

   - **Enabling FTP Authentication**:  
     The following Azure CLI command was used to enable FTP Basic Authentication, which is required for the webhook functionality:

     ```bash
     az resource update --resource-group <resource-group> --name ftp --namespace Microsoft.Web --resource-type basicPublishingCredentialsPolicies --parent sites/<site-name> --set properties.allow=true
     ```

   - **Enabling SCM Authentication**:  
     This command was executed to enable Basic Authentication for SCM (Source Control Management), which is used by Azure Deployment Center for webhook operations:

     ```bash
     az resource update --resource-group <resource-group> --name scm --namespace Microsoft.Web --resource-type basicPublishingCredentialsPolicies --parent sites/<site-name> --set properties.allow=true
     ```

     > These commands ensure that DockerHub can authenticate successfully with Azure App Service.

5. **Webhook**: The webhook notified Azure App Service about the new image version. The URL included the deployment token to allow secure access to the Azure Deployment endpoint.

6. **Azure App Service**:
   - Azure pulled the latest image from DockerHub.
   - The application was automatically updated by restarting the service with the new image.

---

### **Summary**
The process is now fully automated, from code changes to deploying the new version on Azure App Service. The following improvements were implemented:
- Enabled FTP and SCM authentication in Azure to support secure webhook integration.
- Verified DockerHub webhook functionality to trigger updates.
- Ensured Azure pulls the latest Docker image upon receiving the webhook trigger.

This setup ensures the application always uses the latest image, minimizes errors, and shortens deployment time.

---

### **Diagram of the Workflow**
![Julia Golemo Learning Journey Deployment](/images/markdown/webhook_dh.png)
