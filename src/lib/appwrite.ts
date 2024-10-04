import { Client } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('66ff78e50022e856d9c8');         // Your Appwrite Project ID

export default client;
