# Configure the Azure provider
provider "azurerm" {
  features {}
}

# Define variables for storage account name and location
variable "storage_account_name" {
  description = "Name of the storage account"
  type        = string
}

variable "location" {
  description = "Location for the storage account"
  type        = string
  default     = "East US"
}

# Create the storage account
resource "azurerm_storage_account" "example" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.example.name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

# Create a resource group (if not already existing)
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = var.location
}