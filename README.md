# AWS Cloud Resume Challenge

This repository contains my implementation of the [AWS Cloud Resume Challenge](https://cloudresumechallenge.dev/), a hands-on project designed to bridge the gap between cloud certification and practical cloud engineering skills. The challenge involves creating a personal resume website using various AWS services and modern development practices.

## Project Overview

The Cloud Resume Challenge encompasses several key components:

1. **Certification**: Possession of the AWS Cloud Practitioner certification to demonstrate foundational cloud knowledge.

2. **Frontend**:
   - **HTML/CSS**: Designing a static resume webpage using HTML for structure and CSS for styling.
   - **Hosting**: Deploying the static website on an Amazon S3 bucket configured for static site hosting.
   - **HTTPS**: Securing the website using HTTPS via Amazon CloudFront and AWS Certificate Manager.
   - **DNS**: Setting up a custom domain using Amazon Route 53 for DNS management.

3. **Backend**:
   - **Visitor Counter**: Implementing a serverless function using AWS Lambda and API Gateway to track and display the number of visitors to the resume.
   - **Database**: Storing visitor count data in Amazon DynamoDB.

4. **CI/CD Pipeline**:
   - **Infrastructure as Code (IaC)**: Utilizing Terraform to define and provision AWS infrastructure resources.
   - **Continuous Integration/Continuous Deployment (CI/CD)**: Setting up GitHub Actions workflows to automate testing and deployment processes.

## Repository Structure

- `.github/workflows/`: Contains GitHub Actions workflows for automating deployment and other tasks.
- `assets/`: Includes images and other static assets used in the website.
- `infra/`: Terraform configuration files for provisioning AWS resources.
- `lambda/`: Python code for the AWS Lambda function handling the visitor counter.
- `website/`: HTML, CSS, and JavaScript files for the frontend of the resume website.

## Getting Started

To replicate or modify this project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/dlauck92/aws-cloud-resume-challenge.git
   cd aws-cloud-resume-challenge
   ```

2. **Set Up AWS Resources**:
   - Ensure you have AWS credentials configured.
   - Navigate to the `infra/` directory and apply the Terraform configurations:
     ```bash
     cd infra
     terraform init
     terraform apply
     ```

3. **Deploy the Frontend**:
   - Upload the contents of the `website/` directory to the S3 bucket provisioned by Terraform.
   - Invalidate the CloudFront cache to reflect the latest changes.

4. **Set Up CI/CD Pipelines**:
   - Review and customize the GitHub Actions workflows in `.github/workflows/` as needed.
   - Ensure that GitHub Secrets are configured for AWS credentials and other sensitive information.

## Lessons Learned

Throughout this challenge, I gained hands-on experience with:

- Implementing Infrastructure as Code using Terraform.
- Setting up CI/CD pipelines with GitHub Actions.
- Developing serverless functions with AWS Lambda and integrating them with API Gateway.
- Managing DNS and SSL/TLS certificates using Route 53 and AWS Certificate Manager.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details. 