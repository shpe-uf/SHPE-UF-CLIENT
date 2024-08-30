# SHPE UF CLIENT DOCUMENTATION

'''
# Example query
query GetUser($id: ID!) {
  user(id: $id) {
    name
    email
  }
}

# Example mutation
mutation CreateUser($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    id
    name
    email
  }
}
'''