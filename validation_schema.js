const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "app_details": {
      "type": "object",
      "properties": {
        "app_name": {
          "type": "string"
        },
        "github_url": {
          "type": "string",          
        },
        "branch_name": {
          "type": "string"
        },
        "publisher": {
          "type": "string"
        },
        "version": {
          "type": "number"
        },
        "modules": {
          "type": "string",          
        },
        "app_native_role": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "app_custom_roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "resources": {
          "type": "object",
          "properties": {
            "app_credentials": {
              "type": "object",
              "properties": {
                "appId": {
                  "type": "string"
                },
                "password": {
                  "type": "string"
                }
              },
              "required": ["appId", "password"]
            },
            "third_party_details": {
              "type": "object",
              "properties": {
                "third_party_vendor_name": {
                  "type": "string"
                },
                "third_party_vendor_user_name": {
                  "type": "string"
                },
                "third_party_vendor_password": {
                  "type": "string"
                }
              },
              "required": ["third_party_vendor_name", "third_party_vendor_user_name", "third_party_vendor_password"]
            }
          },
          "required": ["app_credentials", "third_party_details"]
        }
      },
      "required": ["app_name", "github_url", "branch_name", "publisher", "version", "modules", "app_native_role", "app_custom_roles", "resources"]
    }
  },
  "required": ["app_details"]
}

module.exports = schema;
