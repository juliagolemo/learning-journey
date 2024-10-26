# Azure App Service

## What is Azure App Service?

Azure App Service is a fully managed platform for building, deploying, and scaling web applications, RESTful APIs, and mobile backends. It allows developers to focus on application code rather than the infrastructure. App Service supports multiple programming languages like .NET, Java, Node.js, Python, and PHP, making it highly versatile. Additionally, it provides built-in authentication and security features, autoscaling, and integration with Azure DevOps for continuous deployment.

## How to create an Azure App Service 

1. Log into the Azure Portal: Go to portal.azure.com and log in to your Azure account.

2. Navigate to “App Services”: In the left menu, select “App Services.”

3. Create a New App Service: Click “+ Create” to start the setup.

4. Select Deployment Type:
    
    - In the Basics section, select Linux as the operating system (required for containerized applications) and choose a region.
    - Under App Service Plan, select a plan with “Basic” or higher SKU, as the Free tier does not support containers.

5. Configure the Container Image:
    - Go to the Docker or Container Settings tab.
    - Select the source of your container image:
        - **Docker Hub** – if the image is stored publicly or privately on Docker Hub.
        - **Azure Container Registry** – if you’re using a private container registry in Azure.
        - **Other Registries** – if the image is hosted in an external registry, such as a private container registry.

6. Provide Image Details:
    - Enter the image name and tag/version (e.g., latest or any specific version).
    - If you’re using a private registry, provide your login credentials to allow App Service to access the image.

7. Review and Create: Click “Review + Create” to verify your settings, and then select “Create.” Azure will provision the App Service and deploy the containerized application.

8. Monitor and Manage:
        Once deployed, you can monitor the app’s performance and logs via the **Log Stream** feature to ensure the container runs correctly.

# Types of Azure App Service

**Static Web Apps**: These are simple websites that don’t require a server to operate, like company landing pages, blogs, or portfolios. This type of app is easy to maintain and performs quickly.

**Web Apps with Databases**: These apps can store and process user data, such as customer lists or products in an online store. They’re ideal for more complex applications that need to save and edit data.

**API Apps**: These apps work “in the background” to help exchange data between different systems or applications. They’re useful for building mobile apps, for example, that need information from a server.

**Mobile Apps**: These are tailored for creating backends for mobile applications, with features like push notifications or offline data synchronization.

**Logic Apps**: These let you create workflows without needing to write code, automating processes like sending emails when a new user is added or data is updated in an app.