### Please read the [README](README.md) first as it covers the files that are common for SDK and Quickstarts, this file only covers the SDK Related files.

## What is a SDK?

A SDK is a software development kit that provides a set of tools and libraries for building applications with FusionAuth.
It provides a set of APIs and libraries for building apps that interacting with FusionAuth


# SDK Specific files

## Please modify the following files to fit your project:

### .github/workflows/codeql.yml

If the language you are using supports CodeQL please implement this workflow otherwise, delete this file.
[About code scanning with CodeQL](https://docs.github.com/en/enterprise-cloud@latest/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql)


### .github/workflows/quality-scan.yml

If your language supports linting please implement this workflow otherwise, delete this file.


### .github/workflows/vulnerability-scan.yml
To ensure the security of your code, we recommend to implement a vulnerability scan.

In our example we use [Mobile Security Framework (MobSF)](https://mobsf.github.io/docs/), it's a static and dynamic code analysis.


### .github/workflows/e2e-test-*.yml

If your language supports e2e testing please implement this workflow otherwise, delete this files.

Add all supported versions to the matrix.


## Please do not modify the following files:

`.github/CODEOWNERS` Links to the FusionAuth community guidelines.

